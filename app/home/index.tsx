import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ThemedComponent from "../../components/ThemedComponent";
import { MainContainer } from "../../components/styles";
import styled from "styled-components/native";
import {
  PopularDish,
  PopularMeal,
  SlideShow,
  HeaderLeft,
  HeaderRight,
} from "../../components/home";
import { Button, SearchInput } from "../../components/form";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SlidersHorizontal } from "phosphor-react-native";
const Header = styled.View`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 300px;
  /* border: 1px solid red; */
`;
const HeaderBackGround = styled.View`
  position: relative;
  width: 100%;
  height: 70%;
  margin: 0;
  padding: 0;
  border-radius: 0 0 30px 30px;
  flex-shrink: 0;
  background-color: #ff703d;
`;
const HeaderContent = styled.View`
  width: 100%;
  position: absolute;
  height: 100%;
  /* border: 1px solid red; */
  justify-content: flex-start;
  align-items: center;
  gap: 35px;
  padding: 50px 23px;
`;
const SearchWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
  padding: 0 30px;
`;
const Home = () => {
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
      <ThemedComponent withStatusBar={false}>
        <MainContainer flexStart>
          <Stack.Screen
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "#FF703D" },
              headerShadowVisible: false,
              headerBackVisible: false,
              headerLeft: () => <HeaderLeft />,
              headerRight: () => <HeaderRight />,
              orientation: "portrait",
            }}
          />
          <Header>
            <HeaderBackGround />
            <HeaderContent>
              <SearchWrapper>
                <SearchInput />
                <Button variant="inverse">
                  <SlidersHorizontal size={32} weight="fill" color="#FF4300" />
                </Button>
              </SearchWrapper>

              <SlideShow />
            </HeaderContent>
          </Header>
        </MainContainer>
        <ExpoStatusBar style="light" backgroundColor="#FF703D" />
      </ThemedComponent>
    </KeyboardAwareScrollView>
  );
};

export default Home;
