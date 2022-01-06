import Player from "./player";

export default class Game {
  constructor(arrLevels, gameView) {
    this.arrLevels = arrLevels;
    this.gameView = gameView;
    this.currentLevel = arrLevels[0];
    this.player = new Player(this.currentLevel.startingPos, this);
    
    this.gameStarted = false;
    this.pauseStatus = false;
    this.won = false;
    this.failed = false;

    this.addKeydownListeners();
  }

  loop() {
    if (this.won || this.failed) {
      this.handleWinOrFail();
      return;
    } else if (!this.pauseStatus) {
      this.gameView.ctx.clearRect(0, 0, this.gameView.ctx.canvas.width, this.gameView.ctx.canvas.height);
      this.player.draw(this.gameView.ctx);
      this.currentLevel.draw(this.gameView.ctx);
    }
    window.requestAnimationFrame(this.loop.bind(this));
  }

  start() {
    this.gameStarted = true;
    this.loop();
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
    if (this.currentLevel === this.arrLevels[this.arrLevels.length - 1]) {
      this.won = true;
    } else {
      this.currentLevel = this.arrLevels[this.currentLevel.level + 1];

      this.player.x = this.currentLevel.startingPos[0];
      this.player.y = this.currentLevel.startingPos[1];

      this.player.velocityX = 10 ** -100;
      this.player.velocityY = 0;
    }
  }

  quitGame() {
    window.location.reload();
  }

  failedGame() {
    if (this.player.inFailZones(this.currentLevel.failZones)) {
      this.failed = true;
      this.removeKeydownListeners();
    }
  }

  handleWinOrFail() {
    this.gameView.activeMenubar = false;
    this.removeKeydownListeners();

    this.won
      ? (document.getElementById("win-container").style.visibility = "visible")
      : (document.getElementById("fail-container").style.visibility = "visible");
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