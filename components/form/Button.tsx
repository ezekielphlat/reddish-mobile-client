import React from "react";
import styled, { css } from "styled-components/native";

type ButtonStyleProps = {
  handlePress?: any;
  children?: any;
  variant?: string;
  type?: string;
};
const Container = styled.TouchableOpacity<any>`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  /* width: 192px;  */
  height: 50px;
  padding: 6px 16px;
  border-radius: 12px;
  ${(props) =>
    props.type === "rounded" &&
    css`
      padding: 10px;
      border-radius: 61px;
    `}
  ${(props) =>
    props.size === "large" &&
    css`
      /* flex: 1; */
      width: 100%;
      height: 50px;
    `}
`;
const ButtonText = styled.Text`
  color: #f4f3f5;
  text-align: center;
  font-family: NunitoSansRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const Button = ({ children, handlePress, variant, type }: ButtonStyleProps) => {
  return (
    <Container type={type} size={variant} onPress={handlePress}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
