export default function addMenubarEventListeners(gameView, game) {
  addStartListener(gameView, game);
  addRestartListener(game);
  addInstructionsListener(gameView, game);
}

function addStartListener(gameView, game) {
  const ele = document.getElementById("start_pause");
  ele.addEventListener("click", handleStart(gameView, game, ele));
}

function handleStart(gameView, game, ele) {
  return function(event) {
    event.stopPropagation();
    event.preventDefault();

    if (ele.innerText === "Start") {
      gameView.start();
      ele.innerHTML = "Pause";
      document.getElementById("canvas-container").style.border = "none";
      document.getElementById("instructions_credits-container").style.visibility = "hidden";
    } else if (ele.innerText === "Pause") {
        game.pause();
        ele.innerHTML = "Resume";
        document.getElementById("pause-container").style.visibility = "visible";
      } else if (ele.innerText === "Resume") {
        game.resume(gameView);
        ele.innerHTML = "Pause";
        document.getElementById("pause-container").style.visibility = "hidden";
        document.getElementById("instructions_credits-container").style.visibility = "hidden";
        document.getElementById("canvas-container").style.border = "none";
    }
  }
}

function addRestartListener(game) {
  const ele = document.getElementById("restart");
  ele.addEventListener("click", handleRestart(game));
}

function handleRestart(game) {
  return function(event) {
    event.stopPropagation();
    event.preventDefault();
    game.restartLevel();
  }
}

function addInstructionsListener(gameView, game) {
  const ele = document.getElementById("instructions_credits");
  ele.addEventListener("click", handleInstructions(gameView, game));
}

function handleInstructions(gameView, game) {
  return function(event) {
    event.stopPropagation();
    event.preventDefault();

    document.getElementById("start_pause").innerHTML = "Resume";
    const ele = document.getElementById("instructions_credits-container");
    const startPause = document.getElementById("start_pause");

    if (ele.style.visibility === "visible") {
      ele.style.visibility = "hidden";
      game.resume(gameView);
      document.getElementById("start_pause").innerHTML = "Pause";
      document.getElementById("canvas-container").style.border = "none";
    } else {
      ele.style.visibility = "visible";
      game.pause();
      document.getElementById("pause-container").style.visibility = "hidden";
    }
  }
}