import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    // MDNichrome display font
    MDNichromeInfra: require("../assets/fonts/MdNichrome/MDNichromeTest-Infra.otf"),
    MDNichromeThin: require("../assets/fonts/MdNichrome/MDNichromeTest-Thin.otf"),
    MDNichromeLight: require("../assets/fonts/MdNichrome/MDNichromeTest-Light.otf"),
    MDNichromeRegular: require("../assets/fonts/MdNichrome/MDNichromeTest-Regular.otf"),
    MDNichromeDark: require("../assets/fonts/MdNichrome/MDNichromeTest-Dark.otf"),
    MDNichromeBold: require("../assets/fonts/MdNichrome/MDNichromeTest-Bold.otf"),
    MDNichromeBlack: require("../assets/fonts/MdNichrome/MDNichromeTest-Black.otf"),
    MDNichromeUltra: require("../assets/fonts/MdNichrome/MDNichromeTest-Ultra.otf"),
  });
  
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
