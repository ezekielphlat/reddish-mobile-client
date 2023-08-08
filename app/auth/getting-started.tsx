import { Image, Pressable } from "react-native";

import { Stack, useRouter } from "expo-router";
import { Eye, EyeSlash } from "phosphor-react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";
import { Button, CustomTextInput, TextButton } from "../../components";
import ThemedComponent from "../../components/ThemedComponent";
import CustomSwitch from "../../components/form/CustomSwitch";
import { MainContainer, StyledText } from "../../components/styles";
import { Images, Styles } from "../../constants";
import { Footer, Header, MainBody } from "../onboarding/onboarding-styles";

const TitleWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;
const FormWrapper = styled.View`
  gap: 10px;
`;
const ScrollContainer = styled.ScrollView`
  flex: 1;
`;
const ForgotPasswordWrapper = styled.View`
  /* width: 100%; */
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  /* background-color: black; */

  align-items: flex-end;
`;
const TermsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
  /* background-color: black; */
`;
const LoginButtonWrapper = styled.View``;
const GettingStarted = () => {
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
              <StyledText fontSize="22px">Get started</StyledText>
              <StyledText light centered fontSize="18px">
                Create your new account
              </StyledText>
            </TitleWrapper>
            <FormWrapper>
              <CustomTextInput label="Full name" errorMessage="" />
              <CustomTextInput label="Email" errorMessage="" />
              <CustomTextInput label="Phone Number" errorMessage="" />

              <CustomTextInput
                label="Password"
                errorMessage=""
                hideValue={!showPassword}
              >
                <Pressable onPress={() => setShowPassword(() => !showPassword)}>
                  {showPassword ? (
                    <Eye style={Styles.password} color="#535474" />
                  ) : (
                    <EyeSlash style={Styles.password} color="#535474" />
                  )}
                </Pressable>
              </CustomTextInput>
              <ForgotPasswordWrapper>
                <TextButton
                  handlePress={() => router.push("/auth/forgot-password")}
                  variant="primary"
                >
                  Forgot Password?
                </TextButton>
              </ForgotPasswordWrapper>
              <TermsWrapper>
                <CustomSwitch />

                <StyledText fontSize="16px" light>
                  I accept all Terms & Conditions
                </StyledText>
              </TermsWrapper>
            </FormWrapper>
          </MainBody>

          <Footer>
            <Button
              variant="large"
              handlePress={() => router.replace("/auth/otp")}
            >
              GET STARTED
            </Button>
          </Footer>
          <LoginButtonWrapper>
            <StyledText fontSize="16px" medium>
              {/* Already have an account? Log in */}
            </StyledText>
          </LoginButtonWrapper>
        </MainContainer>
      </ThemedComponent>
    </KeyboardAwareScrollView>
  );
};

export default GettingStarted;
