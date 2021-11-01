import Game from "./scripts/game";
import GameView from "./scripts/game_view";


document.addEventListener("DOMContentLoaded", () => {
  let main = document.getElementById("canvas-container");
  const canvas = document.createElement("canvas");
  canvas.innerHTML = '<canvas id="canvas"></canvas>';
  main.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  canvas.width = 900; // set to Game.WIDTH
  canvas.height = 600; // set to Game.HEIGHT so it's more dynamic
  
  // let player = new Player(); create new player instance when each level is rendered
  
  // CREATE AN ARRAY OF LEVEL/LAYOUT INSTANCES HERE OR ANOTHER PAGE TO ACT
  // AS A SEEDS FILE; PASS IN AS ARG TO new Game(arr_instances)
  let game = new Game();
  let gameView = new GameView(ctx, game);


  // add event listener inside this to start the gameview
  gameView.start();

});