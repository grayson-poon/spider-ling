import Player from "./player";

class Game {
  constructor(arrLevels) {
    this.arrLevels = arrLevels;
    this.currentLevel = arrLevels.shift();
    this.player = new Player(this.currentLevel.startingPos);
    this.pause = false;
  }

  start(gameView) {
    gameView.loop();
  }
}

export default Game;