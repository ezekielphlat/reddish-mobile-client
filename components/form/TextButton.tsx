import React from "react";
import styled, { css } from "styled-components/native";
type TextButtonProps = {
  handlePress?: any;
  children?: any;
  variant?: string;
  size?: string;
};

const Container = styled.TouchableOpacity``;

const ButtonText = styled.Text<any>`
  font-family: NunitoSansRegular;
  color: #1e1e1e;
  text-align: left;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
  font-style: normal;
  font-weight: 600;
  ${(props) =>
    props.variant === "primary" &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`;
const TextButton = ({
  children,
  variant,
  handlePress,
  size,
}: TextButtonProps) => {
  return (
    <Container onPress={handlePress}>
      <ButtonText variant={variant} fontSize={size}>
        {children}
      </ButtonText>
    </Container>
  );
};

export default TextButton;
