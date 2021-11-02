import Level from "./level";
import Player from "./player";

class Game {
  constructor(arrLevels) {
    this.allLevels = arrLevels;
    this.currentLevel = arrLevels.shift();
    this.currentPlayer = new Player(this.currentLevel.startingPos);
  }

  renderFrame(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.currentLevel.renderLevel(ctx);
    this.currentPlayer.renderPlayer(ctx);
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
    this.currentLevel.layout = this.allLevels.shift();
  }
}

export default Game;