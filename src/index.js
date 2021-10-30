import Example from "./scripts/example";
import { movePlayer } from "./js/move_player";
import { jumpPlayer } from "./js/jump_player";
import { impulse } from "./js/impulse";

document.addEventListener("DOMContentLoaded", () => {
  let main = document.getElementById("canvas-container");

  let canvas = document.createElement("canvas");
  canvas.innerHTML = '<canvas id="canvas" height="300" width="300"></canvas>';
  main.appendChild(canvas);

  canvas.height = 600;
  canvas.width = 900;

  const ctx = canvas.getContext('2d');

  ctx.moveTo(0, canvas.height * 0.75);
  ctx.lineTo(canvas.width, canvas.height * 0.75);
  ctx.stroke();
  
});

document.addEventListener("keydown", (event) => {
  movePlayer(event);
  jumpPlayer(event);
});

document.addEventListener("click", (event) => {
  impulse(event);
});
