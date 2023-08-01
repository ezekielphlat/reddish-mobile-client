import { View, Text } from "react-native";
import React from "react";
import styled, { css } from "styled-components/native";

type SpotHighLightProps = {
  activeIndex?: number;
};
const Container = styled.View`
  flex-direction: row;
  gap: 2px;
`;
const Spot = styled.View<any>`
  height: 10px;
  width: 10px;
  background-color: #929292;
  /* border: 1px solid black; */
  border-radius: 50px;
  ${(props) =>
    props.active === true &&
    css`
      background-color: red;
      width: 20px;
    `}
`;

const SpotHighlight = ({ activeIndex }: SpotHighLightProps) => {
  return (
    <Container>
      <Spot active={activeIndex === 1} />
      <Spot active={activeIndex === 2} />
      <Spot active={activeIndex === 3} />
    </Container>
  );
};

export default SpotHighlight;
