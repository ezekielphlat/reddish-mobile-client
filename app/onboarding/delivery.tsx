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
          <Images.DeliveryIllustration style={Styles.welcome} />
          <CaptionWrapper>
            <StyledText centered fontSize="20px">
              Home-made & delivered to you
            </StyledText>
            <StyledText light centered fontSize="18px">
              Enjoy instant pickup after preparation & quick delivery with
              payment.
            </StyledText>
          </CaptionWrapper>
          <SpotWrapper>
            <SpotHighlight activeIndex={3} />
          </SpotWrapper>
        </MainBody>

        <Footer>
          <Button
            variant="large"
            handlePress={() => router.replace("/auth/getting-started")}
          >
            GET STARTED
          </Button>
        </Footer>
      </MainContainer>
    </ThemedComponent>
  );
};

export default Personalize;
