import GameView from "./scripts/game_view";

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext('2d');

  new GameView(ctx);
});