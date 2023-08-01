import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

// export const unstable_settings = {
//   // Ensure any route can link back to `/`
//   initialRouteName: "home",
// };
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    NunitoSansBold: require("../assets/fonts/NunitoSans_10pt-Bold.ttf"),
    NunitoSansMedium: require("../assets/fonts/NunitoSans_10pt-Regular.ttf"),
    NunitoSansRegular: require("../assets/fonts/NunitoSans_10pt-Medium.ttf"),
    NunitoSansLight: require("../assets/fonts/NunitoSans_10pt-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView} />;
};
export default Layout;
