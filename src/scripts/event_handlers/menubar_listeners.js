export default function addMenubarEventListeners(gameView, game) {
  addStartListener(gameView);
  addRestartListener(game);
  addInstructionsListener(gameView);
}

function addStartListener(gameView) {
  const ele = document.getElementById("start_pause");
  ele.addEventListener("click", handleStart(gameView, ele));
}

function handleStart(gameView, ele) {
  return function(event) {
    event.stopPropagation();
    event.preventDefault();

    if (ele.innerText === "Start") {
      gameView.start();
      ele.innerHTML = "Pause";
      console.log("success");
      document.getElementById("canvas-container").style.border = "none";
    } else if (ele.innerText === "Pause") {
        gameView.pause();
        ele.innerHTML = "Resume";
        document.getElementById("pause-container").style.visibility = "visible";
    } else if (ele.innerText === "Resume") {
      gameView.resume();
      ele.innerHTML = "Pause";
      document.getElementById("pause-container").style.visibility = "hidden";
      document.getElementById("instructions_credits-container").style.visibility = "hidden";
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

function addInstructionsListener(gameView) {
  const ele = document.getElementById("instructions_credits");
  ele.addEventListener("click", handleInstructions(gameView));
}

function handleInstructions(gameView, game) {
  return function(event) {
    event.stopPropagation();
    event.preventDefault();

    document.getElementById("start_pause").innerHTML = "Resume";
    const ele = document.getElementById("instructions_credits-container");
    if (ele.style.visibility === "visible") {
      ele.style.visibility = "hidden";
      gameView.resume();
      document.getElementById("start_pause").innerHTML = "Pause";
    } else {
      ele.style.visibility = "visible";
      gameView.pause();
      document.getElementById("pause-container").style.visibility = "hidden";
    }
  }
}