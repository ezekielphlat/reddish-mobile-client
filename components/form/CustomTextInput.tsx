import { View, Text } from "react-native";
import React, { useState } from "react";
import styled, { css } from "styled-components/native";
import { StyledText } from "../styles";
import { WarningCircle } from "phosphor-react-native";
type CustomTextInputProps = {
  errorMessage?: string;
  label?: string;
  children?: any;
  hideValue?: boolean;
};
const Container = styled.View`
  width: 100%;
  gap: 1px;
`;
const InputWrapper = styled.View<any>`
  width: 336px;
  height: 56px;
  padding: 9px 8px;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 8px;
  /* border: 1px solid #ffd9cc; */
  /* border: 1px solid #999; */
  background-color: #f4f3f5;
  border: 1px solid #ffd9cc;

  ${(props) =>
    props.focused === true &&
    css`
      border: 1px solid #ff703d;
    `}
  ${(props) =>
    props.error !== "" &&
    css`
      border: 1px solid #f00;
    `}
`;
const Input = styled.TextInput`
  font-family: NunitoSansLight;
  width: 90%;
`;
const LabelWrapper = styled.View``;
const Label = styled.Text``;
const ErrorMessage = styled.Text`
  color: #f00;
  font-family: NunitoSansRegular;
  font-size: 10px;
  font-weight: 400;
`;
const ErrorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
  padding-top: 0;
  padding-left: 5px;
`;
const IconWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CustomTextInput = ({
  errorMessage,
  label,
  children,
  hideValue = false,
}: CustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container>
      <InputWrapper error={errorMessage} focused={isFocused}>
        <LabelWrapper>
          <StyledText light fontSize="14px">
            {label}
          </StyledText>
        </LabelWrapper>
        <IconWrapper>
          <Input
            secureTextEntry={hideValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {children}
        </IconWrapper>
      </InputWrapper>
      {errorMessage !== "" && (
        <ErrorWrapper>
          <WarningCircle size={10} color="#f00" weight="fill" />
          <ErrorMessage>error message</ErrorMessage>
        </ErrorWrapper>
      )}
    </Container>
  );
};

export default CustomTextInput;
