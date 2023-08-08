import {
  Image,
  StyleSheet,
  Pressable,
  Platform,
  BackHandler,
  View,
  Text,
} from "react-native";
import styled from "styled-components/native";
import React, { useState, useEffect } from "react";
import { Images, Styles } from "../../constants";
import { MainContainer, StyledText } from "../../components/styles";
import { Stack } from "expo-router";
import SpotHighlight from "../../components/utilities/SpotHighlight";
import { Button, TextButton, CustomTextInput } from "../../components";
import { useRouter } from "expo-router";
import {
  CaptionWrapper,
  Footer,
  Header,
  MainBody,
} from "../onboarding/onboarding-styles";
import { Eye, EyeSlash } from "phosphor-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ThemedComponent from "../../components/ThemedComponent";
import CustomSwitch from "../../components/form/CustomSwitch";
import {
  ForgotPasswordWrapper,
  FormWrapper,
  TermsWrapper,
  TitleWrapper,
} from "./auth-styles";

const LoginButtonWrapper = styled.View``;
const ForgotPassword = () => {
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
              <StyledText fontSize="22px">Forgot Password</StyledText>
              <StyledText light centered fontSize="18px">
                Kindly enter your email and we will send you a verification code
                to reset your password
              </StyledText>
            </TitleWrapper>
            <FormWrapper>
              <CustomTextInput label="Email" errorMessage="" />
            </FormWrapper>
          </MainBody>

          <Footer>
            <Button
              variant="large"
              handlePress={() => router.replace("/auth/getting-started")}
            >
              SEND VERIFICATION CODE
            </Button>
          </Footer>
          <LoginButtonWrapper>
            <StyledText fontSize="16px" medium>
              Log in Instead
            </StyledText>
          </LoginButtonWrapper>
        </MainContainer>
      </ThemedComponent>
    </KeyboardAwareScrollView>
  );
};

export default ForgotPassword;
