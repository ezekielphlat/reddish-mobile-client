import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 60,
    flexShrink: 0,
    // marginLeft: Platform.OS === "android" ? 110 : 0,
  },
  welcome: {
    width: 300,
    height: 300,
    flexShrink: 0,
  },
  password: {
    marginTop: -25,
  },
});

export default styles;
