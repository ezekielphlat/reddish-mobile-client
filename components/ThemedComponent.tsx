import { View, Text } from "react-native";
import { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "./styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
type ThemedComponentProps = {
  children: any;
  withStatusBar?: boolean;
};

const ThemedComponent = ({
  children,
  withStatusBar = true,
}: ThemedComponentProps) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const getTheme = async () => {
    try {
      const themeValue = await AsyncStorage.getItem("@theme");
      if (themeValue) setTheme;
    } catch (error) {
      console.log(error);
    }
  };
  const toggleTheme = async () => {
    const themeValue = theme === "dark" ? "light" : "dark";
    try {
      await AsyncStorage.setItem("@theme", themeValue);
      setTheme(themeValue);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
      {withStatusBar && (
        <ExpoStatusBar style="dark" backgroundColor="#ffd9cc" />
      )}
    </ThemeProvider>
  );
};

export default ThemedComponent;
