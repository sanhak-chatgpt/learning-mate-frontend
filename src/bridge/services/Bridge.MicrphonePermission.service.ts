import { AgentController } from '@/util/Agent';
import { BridgeController, BridgeService } from '@/bridge';

export type MicPermissionResponseParam = 'GRANTED' | 'DENIED';
export type MicPermissionRequestMessage = 'requestMicrophonePermission';

export class MicrophonePermissionBridgeService
  implements BridgeService<MicPermissionRequestMessage, MicPermissionResponseParam>
{
  constructor(private agentController: AgentController, private isGranted: boolean = false) {}

  public receive(params: MicPermissionResponseParam): void {
    if (params === 'GRANTED') {
      this.setIsGranted(true);
      return;
    }
    this.setIsGranted(false);
  }

  public send(message: MicPermissionRequestMessage): void {
    if (this.agentController.isOnWebview()) {
      window.FlutterBridge?.postMessage(message);
    }
  }

  public getIsGranted(): boolean {
    return this.isGranted;
  }

  private setIsGranted(granted: boolean): void {
    this.isGranted = granted;
  }
}

export const microphonePermissionBridgeController = new BridgeController(
  new MicrophonePermissionBridgeService(new AgentController())
);

if (typeof window !== 'undefined') {
  window.MicrophonePermissionBridge = microphonePermissionBridgeController;
}
