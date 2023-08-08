import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";
import { Button, CustomTextInput, TextButton } from "../../components";
import ThemedComponent from "../../components/ThemedComponent";
import { MainContainer, StyledText } from "../../components/styles";
import { Images, Styles } from "../../constants";
import { Header, MainBody } from "../onboarding/onboarding-styles";
import {
  FormWrapper,
  TitleWrapper,
  Footer,
  ResendCodeWrapper,
} from "./auth-styles";
import { OtpInput } from "../../components/form";

const Otp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <ThemedComponent>
        <MainContainer flexStart>
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
            <TitleWrapper>
              <StyledText fontSize="22px">Verification code</StyledText>
              <StyledText light centered fontSize="18px">
                Kindly enter the verification code sent to
                omot********@gmail.com
              </StyledText>
            </TitleWrapper>
            <FormWrapper>
              <OtpInput />
            </FormWrapper>
          </MainBody>

          <Footer>
            <Button variant="large" handlePress={() => router.replace("home")}>
              VERIFY
            </Button>
            <ResendCodeWrapper>
              <StyledText fontSize="16px" medium>
                Didn’t receive the code?
              </StyledText>
              <TextButton size="16px" variant="primary">
                Resend Code
              </TextButton>
            </ResendCodeWrapper>
          </Footer>
        </MainContainer>
      </ThemedComponent>
    </KeyboardAwareScrollView>
  );
};

export default Otp;
