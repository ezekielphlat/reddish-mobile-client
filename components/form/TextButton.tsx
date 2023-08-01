import React from "react";
import styled from "styled-components/native";
type TextButtonProps = {
  children?: any;
};

const Container = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  font-family: NunitoSansRegular;
  color: #1e1e1e;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
`;
const TextButton = ({ children }: TextButtonProps) => {
  return (
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default TextButton;
