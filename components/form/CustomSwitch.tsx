import { View, Text } from "react-native";
import React, { useState } from "react";
import { Switch } from "react-native-gesture-handler";
import { styled } from "styled-components/native";

const Container = styled.View``;

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Container>
      <Switch
        trackColor={{ false: "#767577", true: "#FF4300" }}
        thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Container>
  );
};

export default CustomSwitch;
