import { View, Text, Image, StyleSheet } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { Images } from "../../constants";
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
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 136,
    height: 39,
    flexShrink: 0,
  },
  welcome: {
    width: 300,
    height: 300,
    flexShrink: 0,
  },
});

const Personalize = () => {
  const router = useRouter();
  return (
    <MainContainer>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#f5f5f5" },
          headerShadowVisible: false,
          headerLeft: () => "",
          headerShown: false,
        }}
      />
      <Header>
        <Image source={Images.logo} resizeMode="contain" style={styles.logo} />
      </Header>
      <MainBody>
        <Images.PersonalizeIllustration style={styles.welcome} />
        <CaptionWrapper>
          <StyledText fontSize="22px">Personalize your meal</StyledText>
          <StyledText light centered fontSize="18px">
            Select ingredient, adjust portion sizes or choose cooking techniques
          </StyledText>
        </CaptionWrapper>
        <SpotWrapper>
          <SpotHighlight activeIndex={2} />
        </SpotWrapper>
      </MainBody>

      <Footer>
        <TextButton>Skip</TextButton>
        <Button handlePress={() => router.push("/onboarding/delivery")}>
          CONTINUE
        </Button>
      </Footer>
    </MainContainer>
  );
};

export default Personalize;
