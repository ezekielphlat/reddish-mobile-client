import { View, Text, Image, StyleSheet, Platform } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { Images, Styles } from "../../constants";
import { MainContainer, StyledText } from "../../components/styles";
import { Stack } from "expo-router";
import SpotHighlight from "../../components/utilities/SpotHighlight";
import { Button, TextButton } from "../../components";
import { useRouter } from "expo-router";
import {
  CaptionWrapper,
  Footer,
  Header,
  MainBody,
  SpotWrapper,
} from "./onboarding-styles";
import { CaretRight } from "phosphor-react-native";

const Welcome = () => {
  const router = useRouter();
  const handleContinuePress = () => {
    console.log("working");
    router.push("/onboarding/personalize");
  };
  return (
    <MainContainer>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#fff" },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => null,
          headerShown: false,
          orientation: "portrait",
        }}
      />
      <Header>
        <Image source={Images.logo} resizeMode="contain" style={Styles.logo} />
      </Header>
      <MainBody>
        <Images.WelcomeIllustration style={Styles.welcome} />
        <CaptionWrapper>
          <StyledText fontSize="22px">Welcome</StyledText>
          <StyledText light centered fontSize="18px">
            Get ready to indulge in a new dining experience
          </StyledText>
        </CaptionWrapper>
        <SpotWrapper>
          <SpotHighlight activeIndex={1} />
        </SpotWrapper>
      </MainBody>

      <Footer>
        <TextButton handlePress={() => router.replace("/home")}>
          Skip
        </TextButton>
        <Button
          type="rounded"
          handlePress={() => router.replace("/home/personalize")}
        >
          <CaretRight size={32} color="#f7f7f7" />
        </Button>
      </Footer>
    </MainContainer>
  );
};

export default Welcome;
