import Player from "./player";

class Game {
  constructor(arrLevels) {
    this.arrLevels = arrLevels;
    this.currentLevel = arrLevels.shift();
    this.player = new Player(this.currentLevel.startingPos, this.currentLevel);
    this.gameStarted = false;
    this.pauseStatus = false;

    this.addKeydownListeners();
  }

  start(gameView) {
    this.gameStarted = true;
    gameView.loop();
  }

  pause() {
    this.pauseStatus = true;
    this.removeKeydownListeners();
  }

  resume() {
    this.pauseStatus = false;
    this.addKeydownListeners();
  }

  restartLevel() {
    this.pauseStatus = false;
    this.addKeydownListeners();
    this.player.x = this.currentLevel.startingPos[0];
    this.player.y = this.currentLevel.startingPos[1];
  }

  addKeydownListeners() {
    document.addEventListener("keydown", this.player.controller.keyListener);
    document.addEventListener("keyup", this.player.controller.keyListener);
  }

  removeKeydownListeners() {
    document.removeEventListener("keydown", this.player.controller.keyListener);
    document.removeEventListener("keyup", this.player.controller.keyListener);
  }
}

export default Game;