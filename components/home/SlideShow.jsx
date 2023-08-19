import { View, Text, Dimensions } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { SlideShowCard } from ".";
import Carousel from "react-native-snap-carousel";

const data = [
  {
    message: "Welcome to home of tasty dishes",
    image: "../../assets/images/slides/slide1.png",
  },
  {
    message: "it is a lovely day",
    image: "../../assets/images/slides/slide1.png",
  },
  {
    message: "Lets get over it",
    image: "../../assets/images/slides/slide1.png",
  },
];
const Container = styled.View`
  width: 100%;
  margin-left: -20px;
`;

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const SlideShow = () => {
  const isCarousel = React.useRef(null);
  return (
    <Container>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={SlideShowCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={350}
        inactiveSlideShift={0}
        useScrollView={true}
        autoplay={true}
        // autoplayDelay={0}
        // autoplayInterval={2}
      />
    </Container>
  );
};

export default SlideShow;
