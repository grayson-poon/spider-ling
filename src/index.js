import Game from "./scripts/game";
import GameView from "./scripts/game_view";
import { arrLevels }  from "./scripts/wall_layouts/seeds";

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext('2d');
  
  let game = new Game(arrLevels);
  new GameView(ctx, game);
});