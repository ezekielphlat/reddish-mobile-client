import styled, { css } from "styled-components/native";
import Constants from "expo-constants";

export const MainContainer = styled.SafeAreaView<any>`
  width: 100%;
  background-color: #fdeee9;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.flexStart &&
    css`
      justify-content: flex-start;
      gap: 29px;
    `}/* justify-content: space-evenly; */
  /* padding: 0 32px; */
  /* padding-top: ${Constants.statusBarHeight + "px"}; */
`;
