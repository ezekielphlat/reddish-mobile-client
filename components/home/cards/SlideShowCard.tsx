import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
interface ItemType {
  message: string;
  image: string;
}
type SlideShowCardProps = {
  item?: ItemType;
  index?: number;
  dataIndex: number;
};

const Container = styled.View`
  width: 100%;
  height: 165px;
`;
const TextWrapper = styled.View`
  width: 100%;
  height: 127px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
`;
const SlideShowCard = ({ item, index, dataIndex }: SlideShowCardProps) => {
  return (
    <Container key={index}>
      <TextWrapper>
        <Text>{item.message}</Text>
      </TextWrapper>
    </Container>
  );
};

export default SlideShowCard;
