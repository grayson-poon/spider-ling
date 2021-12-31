import Player from "./player";
import { wallUtil } from "./Utils/wallUtil";
import addKeydownEventListeners from "./event_handlers/keydown_listeners";

class Game {
  constructor(arrLevels) {
    this.allLevels = arrLevels;
    this.currentLevel = arrLevels.shift();
    this.currentPlayer = new Player(this.currentLevel.startingPos);
    this.done = false;
    this.pauseStatus = false;
  }

  renderFrame(ctx) {
    if (this.currentPlayer.jumping) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.currentPlayer.renderPlayer(ctx);
      this.currentLevel.renderLevel(ctx);
      this.completedLevel();
      this.failedLevel();
    } else {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.currentPlayer.renderPlayer(ctx);
      this.currentLevel.renderLevel(ctx);
      this.completedLevel();
      this.failedLevel();
      this.gravity();
    }
  }

  pause() {
    this.pauseStatus = true;
    addKeydownEventListeners(this.player, this.level, this.pauseStatus);
  }

  resume(gameView) {
    this.pauseStatus = false;
    addKeydownEventListeners(this.player, this.level, this.pauseStatus);
    gameView.start();
  }

  winGame() {
    if (this.done) {
      document.getElementById("win-container").style.visibility = "visible";
      this.pause();
    }
  }
  
  completedLevel() {
    if (this.currentPlayer.inWinZone(this.currentLevel.winZone)) {
      this.nextLevel();
    }
  }

  failedLevel() {
    if (this.currentPlayer.inFailZone(this.currentLevel.failZones)) {
      this.restartLevel();
    }
  }
  
  nextLevel() {
    if (this.allLevels.length >= 1) {
      this.currentLevel = this.allLevels.shift();
      this.currentPlayer.x = this.currentLevel.startingPos[0];
      this.currentPlayer.y = this.currentLevel.startingPos[1];
    } else {
      this.done = true;
      this.winGame();
    }
  }

  restartLevel() {
    this.currentPlayer.x = this.currentLevel.startingPos[0];
    this.currentPlayer.y = this.currentLevel.startingPos[1];
  }

  gravity() {
    let closest = wallUtil.closestWallBelow(this.currentPlayer, this.currentLevel.arrWalls);
    let distance = wallUtil.distanceBelow(this.currentPlayer, closest);
    
    if (distance === 2) {
      return
    } else if (distance > this.currentPlayer.velocity) {
      // this.currentPlayer.y += this.currentPlayer.velocity;
      this.currentPlayer.gravityStep();
    } else {
      this.currentPlayer.y += (distance - 2);
    }
  }
}

export default Game;