import { AgentController } from '@/util/models/Agent';
import { BridgeController, BridgeService } from '@/bridge';

export type OpenStoreResponseParam = 'GRANTED' | 'DENIED';
export type OpenStoreRequestMessage = 'requestOpenStoreListing';

export class OpenStoreListingBridgeService
  implements BridgeService<OpenStoreRequestMessage, OpenStoreResponseParam>
{
  constructor(private agentController: AgentController, private isGranted: boolean = false) {}

  public receive(params: OpenStoreResponseParam): void {
    if (params === 'GRANTED') {
      this.setIsGranted(true);
      return;
    }
    this.setIsGranted(false);
  }

  public send(message: OpenStoreRequestMessage): void {
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

export const openstorelistingBridgeController = new BridgeController(
  new OpenStoreListingBridgeService(new AgentController())
);

if (typeof window !== 'undefined') {
  window.OpenStoreListingBridge = openstorelistingBridgeController;
}
