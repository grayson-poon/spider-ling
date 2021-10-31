import Level from "./level";
import Player from "./player";

class Game {
  constructor() {
    this.currentLevel = new Level(this.ctx); // (this.ctx, layout, starting pos of player)
    this.currentPlayer = new Player(250, 250); // (this.currentLevel.startingPos)

    // bindings
    // this.currentLevel = this.currentLevel.bind(this);
  }

  renderFrame(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.currentLevel.layout(ctx);
    this.currentPlayer.renderPlayer(ctx);
  }

  // animate(ctx) {
  //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //   this.currentLevel.renderLevel(this.ctx);
  //   this.currentPlayer.renderPlayer(this.ctx);
  // }

  // try to move player and level stuff to the game class and maybe declare game on startup so 
  // you can pass in game as an arg into new GameView

  // renderLevel() {

  // }
}

// /* IMPORT ALL LAYOUTS/LEVELS INTO THIS FILE */
// import Level from "./level";

// // game dimensions for canvas
// Game.WIDTH = 900;
// Game.HEIGHT = 600;

export default Game;