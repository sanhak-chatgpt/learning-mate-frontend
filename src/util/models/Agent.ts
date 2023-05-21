export type DeviceEnvironment = 'PC' | 'MOBILE' | 'WEBVIEW';

export class AgentController {
  private getDeviceEnvironment = (): DeviceEnvironment => {
    const userAgent = navigator.userAgent;

    // on webview
    if (window.FlutterBridge) {
      return 'WEBVIEW';
    }
    // on Mobile Browser
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      return 'MOBILE';
    }

    // On PC Browser
    return 'PC';
  };

  public isOnWebview = () => {
    console.log(this.getDeviceEnvironment())
    return this.getDeviceEnvironment() === 'WEBVIEW';
  };
}

export const agentController = new AgentController();
