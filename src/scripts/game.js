import Level from "./level";
import Player from "./player";

class Game {
  constructor(arrLevels) {
    this.currentLevel = arrLevels.shift(); // (this.ctx, layout, starting pos of player)
    this.layout = this.currentLevel.layout;
    this.currentPlayer = new Player(this.currentLevel.startingPos); // (this.currentLevel.startingPos)
  }

  renderFrame(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.currentLevel.layout(ctx);
    this.currentPlayer.renderPlayer(ctx);
  }

  nextLevel(ctx) {
    // let currentLayoutIdx = layouts[this.layout];
    this.layout = layouts[currentLayoutIdx + 1];
    this.layout.renderLevel(ctx);
  }

  completedLevel(layout) {
    if (this.currentPlayer.inWinZone(this.layout)) {
      // render the next level or the congratulations page
    };
  }
}

// /* IMPORT ALL LAYOUTS/LEVELS INTO THIS FILE */
// import Level from "./level";

// // game dimensions for canvas
// Game.WIDTH = 900;
// Game.HEIGHT = 600;

export default Game;