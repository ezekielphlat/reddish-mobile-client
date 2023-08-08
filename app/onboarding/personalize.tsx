import { View, Text, Image, StyleSheet, Platform } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { Images, Styles } from "../../constants";
import { MainContainer, StyledText } from "../../components/styles";
import { Stack } from "expo-router";
import SpotHighlight from "../../components/utilities/SpotHighlight";
import { Button, TextButton } from "../../components";
import { useRouter } from "expo-router";
import { useTheme } from "styled-components/native";

import {
  CaptionWrapper,
  Footer,
  Header,
  MainBody,
  SpotWrapper,
} from "./onboarding-styles";
import ThemedComponent from "../../components/ThemedComponent";
import { CaretRight } from "phosphor-react-native";

const Personalize = () => {
  const router = useRouter();
  return (
    <ThemedComponent>
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
          <Image
            source={Images.logo}
            resizeMode="contain"
            style={Styles.logo}
          />
        </Header>
        <MainBody>
          <Images.PersonalizeIllustration style={Styles.welcome} />
          <CaptionWrapper>
            <StyledText fontSize="22px">Personalize your meal</StyledText>
            <StyledText light centered fontSize="18px">
              Select ingredient, adjust portion sizes or choose cooking
              techniques
            </StyledText>
          </CaptionWrapper>
          <SpotWrapper>
            <SpotHighlight activeIndex={2} />
          </SpotWrapper>
        </MainBody>

        <Footer>
          <TextButton
            handlePress={() => router.replace("/auth/getting-started")}
          >
            Skip
          </TextButton>
          <Button
            type="rounded"
            handlePress={() => router.replace("/onboarding/delivery")}
          >
            <CaretRight size={32} color="#f7f7f7" />
          </Button>
        </Footer>
      </MainContainer>
    </ThemedComponent>
  );
};

export default Personalize;
