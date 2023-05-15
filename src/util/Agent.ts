declare global {
  interface Window {
    FlutterBridge?: {
      postMessage: (status: string) => void;
    };
  }
}

export type DeviceEnvironment = 'PC' | 'MOBILE' | 'WEBVIEW';

export const getDeviceEnvironment = (): DeviceEnvironment => {
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
