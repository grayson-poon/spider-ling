import GameView from "./scripts/game_view";


document.addEventListener("DOMContentLoaded", () => {
  let main = document.getElementById("canvas-container");
  const canvas = document.createElement("canvas");
  canvas.innerHTML = '<canvas id="canvas"></canvas>';
  main.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  canvas.height = 600; // set to Game.HEIGHT so it's more dynamic
  canvas.width = 900; // set to Game.WIDTH
  
  // let player = new Player(); create new player instance when each level is rendered
  let gameView = new GameView(ctx);
  gameView.start();

});

// document.addEventListener("click", (event) => {
//   console.log(event);
// });

// document.addEventListener("keydown", (event) => {
//   if (event.keyCode === 65) {
//     console.log("left");
//     console.log(event);
//   }
// });

// const canvas = document.createElement("canvas");
// const ctx = canvas.getContext('2d');

// let spidey = new Image();
// spidey.src = "../../../assets/sprite_spiderman.png";
// console.log(spidey);

// let test2 = new Player(250, 300, spidey, canvas, ctx);
// test2.renderPlayer(ctx, spidey);
// console.log(test2);

// document.addEventListener("keydown", (event) => {
//   if (event.keyCode === 65) {
//     test2.movePlayerLeft();
//   } else if (event.keyCode === 68) {
//     test2.movePlayerRight();
//   }
// });