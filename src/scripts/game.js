import GameView from "./game_view";

class Game {
  constructor(ctx) {
    this.currentLevel = new Level(this.ctx); // (this.ctx, layout, starting pos of player)
    this.currentPlayer = new Player(0, 0); // (this.currentLevel.startingPos)
  }

  animate(ctx) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.currentLevel.renderLevel(this.ctx);
    this.currentPlayer.renderPlayer(this.ctx);
  }

  // try to move player and level stuff to the game class and maybe declare game on startup so 
  // you can pass in game as an arg into new GameView
}


// import levelOne from "./level_layouts/level_one";

// /* IMPORT ALL LAYOUTS/LEVELS INTO THIS FILE */
// import Level from "./level";

// // game dimensions for canvas
// Game.WIDTH = 900;
// Game.HEIGHT = 600;

// class Game {
//   constructor(canvas, ctx) {
//     new Level(levelOne, canvas, ctx);
//   }
// }

// document.addEventListener("keydown", (event) => {
//   console.log("in game class")
// })


// export default Game;