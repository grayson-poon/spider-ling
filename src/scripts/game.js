import Player from "./player";
import { wallUtil } from "./modules/wallUtil";

class Game {
  constructor(arrLevels) {
    this.allLevels = arrLevels;
    this.currentLevel = arrLevels.shift();
    this.currentPlayer = new Player(this.currentLevel.startingPos);
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
      this.gravity();
      this.completedLevel();
      this.failedLevel();
    }
  }

  
  completedLevel() {
    if (this.currentPlayer.inWinZone(this.currentLevel.winZone)) {
      // change visibility of win page to visible
      // after 5 seconds with set timeout, change visibility back to hidden
      this.nextLevel();
    }
  }

  failedLevel() {
    if (this.currentPlayer.inFailZone(this.currentLevel.failZones)) {
      this.restartLevel();
    }
  }
  
  nextLevel() {
    this.currentLevel = this.allLevels.shift();
    this.currentPlayer.x = this.currentLevel.startingPos[0];
    this.currentPlayer.y = this.currentLevel.startingPos[1];
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
      this.currentPlayer.y += this.currentPlayer.velocity;
    } else {
      this.currentPlayer.y += (distance - 2);
    }
  }
}

export default Game;