import styled from "styled-components/native";
import Constants from "expo-constants";

export const MainContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors?.background};
  flex: 1;
  align-items: center;
  /* justify-content: space-evenly; */
  padding: 0 32px;
  padding-top: ${Constants.statusBarHeight + "px"};
`;

// export const Header = styled.View`
//   display: flex;
//   width: 100%;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
// `;
