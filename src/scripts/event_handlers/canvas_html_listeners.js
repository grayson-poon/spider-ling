import Game from "../game";
import { arrLevels } from "../levels/seeds";

const handleBackToHome = () => {
  const elements = document.getElementsByClassName("home");

  Array.from(elements).forEach((ele) => {
    ele.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();

      window.location.reload();
    });
  });
};

const handleNewGame = (gameView) => {
  const elements = document.getElementsByClassName("new-game");

  Array.from(elements).forEach((ele) => {
    ele.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();

      debugger;

      document.getElementById("start-pause").innerText = "Pause";
      document.getElementById("fail-container").style.visibility = "hidden";
      document.getElementById("pause-container").style.visibility = "hidden";
      document.getElementById("about-container").style.visibility = "hidden";
      document.getElementById("controls-container").style.visibility = "hidden";
      document.getElementById("win-container").style.visibility = "hidden";

      gameView.newGame();
      gameView.game.start();
    });
  });
};

export const addCanvasHtmlListeners = (gameView) => {
  handleBackToHome();
  handleNewGame(gameView);
};