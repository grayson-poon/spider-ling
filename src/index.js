import Example from "./scripts/example";
import { movePlayer } from "./js/move_player";
import { jumpPlayer } from "./js/jump_player";
import { impulse } from "./js/impulse";

import { renderCanvas } from "./js/modules/render_canvas";
import { loadLevelOne } from "./js/levels.js/level_one";

document.addEventListener("DOMContentLoaded", () => {
  let main = document.getElementById("canvas-container");
  let canvas = document.createElement("canvas");
  canvas.innerHTML = '<canvas id="canvas" height="300" width="300"></canvas>';
  main.appendChild(canvas);

  canvas.height = 600;
  canvas.width = 900;

  const ctx = canvas.getContext('2d');

  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 76) loadLevelOne(canvas, ctx);
  });

});

document.addEventListener("keydown", (event) => {
  movePlayer(event);
  jumpPlayer(event);
});

document.addEventListener("click", (event) => {
  impulse(event);
});
