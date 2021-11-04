import Game from "./scripts/game";
import GameView from "./scripts/game_view";
import { arrLevels }  from "./scripts/wall_layouts/seeds";

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext('2d');
  
  let game = new Game(arrLevels);
  let gameView = new GameView(ctx, game);

  document.addEventListener("click", (event) => {
    console.log(event);
    // console.log(event);
    if (event.target.innerText === "Start") {
      gameView.start();
      const start = document.getElementById("start_pause");
      start.innerHTML = "Pause";

      const canvasContainer = document.getElementById("canvas-container");
      canvasContainer.style.border = "none";
    } else if (event.target.innerText === "Instructions & Credits") {
      const start = document.getElementById("start_pause");
      start.innerHTML = "Resume";
      const instructions_credits_container = document.getElementById("instructions_credits-container");
      if (instructions_credits_container.style.visibility === "visible") {
        instructions_credits_container.style.visibility = "hidden";
      } else {
        instructions_credits_container.style.visibility = "visible";
      }
      console.log(instructions_credits_container);
    } else if (event.target.innerText === "Restart") {
      game.restartLevel();
    } else if (event.target.innerText === "Pause") {
      gameView.pause();
      const pause = document.getElementById("start_pause");
      pause.innerHTML = "Resume";

      const pause_container = document.getElementById("pause-container");
      pause_container.style.visibility = "visible";
    } else if (event.target.innerText === "Resume") {
      gameView.resume();

      document.getElementById("pause-container").style.visibility = "hidden";
      const resume = document.getElementById("start_pause");
      resume.innerHTML = "Pause";
    }
  });

});