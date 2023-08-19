import React, { useState } from "react";
import styled from "styled-components/native";
import { MagnifyingGlass } from "phosphor-react-native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 10px 12px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #fff;
  gap: 5px;
`;
const Input = styled.TextInput`
  font-family: NunitoSansLight;
  width: 90%;
  font-size: 16px;
  color: #5b5b5b;
`;

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      {!isFocused && <MagnifyingGlass size={18} color="#5b5b5b" />}
      <Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search"
      />
    </Container>
  );
};

export default SearchInput;
