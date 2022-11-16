import { ImageBackground, Text } from "react-native";
import React from "react";

import BACKGROUND from "../../assets/images/background.png";

import { styles } from "./styles";
import Game from "./Game";

const Home = () => {
  return (
    <ImageBackground source={BACKGROUND} style={styles.container}>
      <Game />
    </ImageBackground>
  );
};

export { Home };
