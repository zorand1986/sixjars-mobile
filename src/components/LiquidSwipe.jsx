/* eslint-disable global-require */
import React, { useState } from "react";
import Slider from "./Slider";
import Slide from "./Slide";

import { colors } from "../styles/commonStyles";
import LoginPage from "../screens/LoginPage";

const slides = [
  {
    color: colors.primary,
    title: "Control",
    description:
      "Have control over your finances.",
    picture: require("../../assets/Control.png"),
  },
  {
    color: colors.tertiary,
    title: "Analyze",
    description:
      "Take a deep dive into your montly expenses and incomes.",
    picture: require("../../assets/Analize.png"),
  },
  {
    color: colors.variantBlue,
    title: "Achieve",
    description:
      "Make a step forward to realizing your financial goals.",
    picture: require("../../assets/Achieve.png"),
  },
  {},
];

const LiquidSwipe = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];
  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && index !== slides.length - 1 && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}
    >
      {slides?.[index].color
        ? <Slide isLast={!next} slide={slides?.[index]} />
        : <LoginPage navigation={navigation} /> }
    </Slider>
  );
};

export default LiquidSwipe;
