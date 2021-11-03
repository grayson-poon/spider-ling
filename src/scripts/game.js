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
    } else {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.currentPlayer.renderPlayer(ctx);
      this.currentLevel.renderLevel(ctx);
      this.gravity();
    }
  }

  
  completedLevel() {
    if (this.currentPlayer.inWinZone(this.currentLevel.layout)) {
      // render the next level or the congratulations page
    }
  }

  failedLevel() {
    if (this.currentPlayer.inFailZone(this.currentLevel.layout)) {
      // render the fail page with buttons to restart or quit
    }
  }
  
  nextLevel() {
    this.currentLevel = this.allLevels.shift();
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