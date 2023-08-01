import { useState } from "react";
import Welcome from "./onboarding/welcome";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "../components/styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
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
      <Welcome />
    </ThemeProvider>
  );
};
export default Index;
