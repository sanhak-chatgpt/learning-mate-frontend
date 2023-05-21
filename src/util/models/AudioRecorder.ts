import { BaseError } from '@/util/models/Error';

export interface RecorderConfig {
  onStart?: (...args: any) => void;
  onDataAvailable?: (...args: any) => void;
  onStop?: (...args: any) => void;
  onResume?: (...args: any) => void;
  onPause?: (...args: any) => void;
  onError?: (...args: any) => void;
}

export class AudioMediaRecorder {
  recorder: MediaRecorder | undefined;
  private totalRecordBlob: Blob | undefined;
  private audioChunks: Blob[] = [];

  constructor(private recorderConfig: RecorderConfig) {}

  public startRecord = () => {
    this.recorder?.start();
  };

  public stopRecord = () => {
    this.recorder?.stop();
  };

  public resumeRecord = () => {
    this.recorder?.resume();
  };

  public pauseRecord = () => {
    this.recorder?.pause();
  };

  public getRecorderConfig = () => {
    return this.recorderConfig;
  };

  public initAudioRecorder = async () => {
    if (!this.recorder) {
      this.recorder = await this.createMediaRecorder();
      this.setRecorderConfig();
    }
  };

  private setRecorderConfig = () => {
    if (!!this.recorder) {
      console.log('record config set');
      this.recorder.onstart = () => {
        this.recorderConfig?.onStart?.();
      };

      this.recorder.onstop = () => {
        this.saveTotalRecordBlob();
        this.recorderConfig?.onStop?.();
        this.recorder = undefined;
      };

      this.recorder.ondataavailable = (e) => {
        this.audioChunks.push(e.data);
        this.recorderConfig?.onDataAvailable?.();
      };
      this.recorder.onpause = () => {
        this.recorderConfig?.onPause?.();
      };

      this.recorder.onresume = () => {
        this.recorderConfig?.onResume?.();
      };

      this.recorder.onerror = () => {
        this.recorderConfig?.onError?.();
      };
    }
  };

  public getRecorderState = () => {
    return this.recorder?.state;
  };

  public getTotalRecordBlob = () => {
    return this.totalRecordBlob;
  };

  private saveTotalRecordBlob = () => {
    this.totalRecordBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
  };

  private createMediaRecorder = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      return new MediaRecorder(stream);
    } catch (e) {
      console.log(e)
      console.log((e as Error).message)
      throw new BaseError('마이크 권한을 허용해주세요!');
    }
  };
}
