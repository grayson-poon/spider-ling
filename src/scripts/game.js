import Player from "./player";

class Game {
  constructor(arrLevels) {
    this.arrLevels = arrLevels;
    this.currentLevel = arrLevels.shift();
    this.player = new Player(this.currentLevel.startingPos, this.currentLevel);
    
    this.gameStarted = false;
    this.pauseStatus = false;
    this.won = false;
    this.failed = false;

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
    this.player.velocityX = 0;
    this.player.velocityY = 0;
  }

  nextLevel() {
    if (this.arrLevels >= 1) {
      this.currentLevel = this.arrLevels.shift();
      this.currentPlayer.x = this.currentLevel.startingPos[0];
      this.currentPlayer.y = this.currentLevel.startingPos[1];
    } else {
      this.won = true;
    }
  }

  failedGame() {
    if (this.player.inFailZones(this.currentLevel.failZones)) {
      this.failed = true;
    }
  }

  addKeydownListeners() {
    document.addEventListener("keydown", this.player.keydownState.keydownController);
    document.addEventListener("keyup", this.player.keydownState.keydownController);
    document.getElementById("canvas").addEventListener("click", this.player.keydownState.clickController);
  }

  removeKeydownListeners() {
    document.removeEventListener("keydown", this.player.keydownState.keydownController);
    document.removeEventListener("keyup", this.player.keydownState.keydownController);
    document.getElementById("canvas").removeEventListener("click", this.player.keydownState.clickController);
  }
}

export default Game;