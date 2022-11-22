import { useRef, useState, useEffect } from "react";
import { Start } from "./Start";
import { GameEngine } from "react-native-game-engine";

import entities from "../../../entities";
import { styles } from "./styles";

const Game = () => {
  const [running, setIsRunning] = useState(false);

  const gameEngineRef = useRef();

  const handleOnStartGame = () => {
    // TODO:
  };

  // return <Start handleOnStartGame={handleOnStartGame} />;

  return (
    <GameEngine
      ref={gameEngineRef}
      running={running}
      entities={entities()}
      style={styles.engineContainer}
    />
  );
};

export { Game };
