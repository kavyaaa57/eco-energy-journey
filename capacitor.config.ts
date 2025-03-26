
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.80e0cbd8e6ae4ccfb34823152a5b5833',
  appName: 'eco-energy-journey',
  webDir: 'dist',
  server: {
    url: 'https://80e0cbd8-e6ae-4ccf-b348-23152a5b5833.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#F9FAFB",
      showSpinner: true,
      spinnerColor: "#8B5CF6",
      androidSpinnerStyle: "large"
    }
  }
};

export default config;
