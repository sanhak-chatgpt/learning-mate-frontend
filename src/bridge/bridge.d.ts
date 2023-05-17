import { BridgeController } from '@/bridge/Bridge.Controller';
import {
  MicPermissionRequestMessage,
  MicPermissionResponseParam,
} from '@/bridge/services/Bridge.MicrphonePermission.service';

declare global {
  interface Window {
    FlutterBridge?: {
      postMessage: (status: string) => void;
    };
    MicrophonePermissionBridge: BridgeController<
      MicPermissionRequestMessage,
      MicPermissionResponseParam
    >;
  }
}
