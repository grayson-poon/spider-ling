import Player from "./player";

export default class Game {
  constructor(arrLevels) {
    this.arrLevels = arrLevels;
    this.currentLevel = arrLevels.shift();
    this.player = new Player(this.currentLevel.startingPos, this);
    
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
    this.player.velocityX = 10 ** -100;;
    this.player.velocityY = 0;
  }

  nextLevel() {
    if (this.arrLevels.length >= 1) {
      this.currentLevel = this.arrLevels.shift();

      this.player.x = this.currentLevel.startingPos[0];
      this.player.y = this.currentLevel.startingPos[1];

      this.player.velocityX = (10 ** -100);
      this.player.velocityY = 0;
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