import { BridgeController } from '@/bridge/Bridge.Controller';
import { MicrophonePermissionBridgeService } from '@/bridge/services/Bridge.MicrphonePermission.service';

import { AuthenticationBridgeService } from '@/bridge/services/Bridge.Auth.service';
import { OpenStoreListingBridgeService } from './services/Bridge.OpenStoreListing.service';

declare global {
  interface Window {
    FlutterBridge?: {
      postMessage: (status: string) => void;
    };
    MicrophonePermissionBridge: BridgeController<MicrophonePermissionBridgeService>;
    AuthenticationBridge: BridgeController<AuthenticationBridgeService>;
    OpenStoreListingBridge: BridgeController<OpenStoreListingBridgeService>
  }
}
