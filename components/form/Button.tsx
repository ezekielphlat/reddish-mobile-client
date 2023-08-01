import React from "react";
import styled, { css } from "styled-components/native";

type ButtonStyleProps = {
  handlePress?: any;
  children?: any;
  variant?: string;
};
const Container = styled.TouchableOpacity<any>`
  justify-content: center;
  align-items: center;
  background-color: #ff4300;
  width: 192px;
  height: 50px;
  padding: 6px 16px;
  border-radius: 12px;
  ${(props) =>
    props.size === "large" &&
    css`
      flex: 1;
      width: 100%;
    `}
`;
const ButtonText = styled.Text`
  color: #f4f3f5;
  text-align: center;
  font-family: NunitoSansRegular;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
`;

const Button = ({ children, handlePress, variant }: ButtonStyleProps) => {
  return (
    <Container size={variant} onPress={handlePress}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
