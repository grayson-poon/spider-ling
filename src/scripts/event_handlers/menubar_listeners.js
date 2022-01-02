const handleStart = (gameView, game) => {
  const ele = document.getElementById("start_pause");

  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (ele.innerText === "Start") {
      game.start(gameView);
      ele.innerHTML = "Pause";
      document.getElementById("canvas-container").style.border = "none";
      document.getElementById(
        "instructions_credits-container"
      ).style.visibility = "hidden";
    } else if (ele.innerText === "Pause") {
      game.pause();
      ele.innerHTML = "Resume";
      document.getElementById("pause-container").style.visibility = "visible";
    } else if (ele.innerText === "Resume") {
      game.resume();
      ele.innerHTML = "Pause";
      document.getElementById("pause-container").style.visibility = "hidden";
      document.getElementById(
        "instructions_credits-container"
      ).style.visibility = "hidden";
      document.getElementById("canvas-container").style.border = "none";
    }
  });
};

const handleRestart = (gameView, game) => {
  const ele = document.getElementById("restart");

  ele.addEventListener("click", (event) => {
    if (!game.gameStarted) return;
    event.stopPropagation();
    event.preventDefault();
    document.getElementById("start_pause").innerText = "Pause";
    document.getElementById("pause-container").style.visibility = "hidden";
    document.getElementById("instructions_credits-container").style.visibility = "hidden";
    game.restartLevel(gameView);
  });
};

const handleInstructions = (game) => {
  const ele = document.getElementById("instructions_credits");
  
  ele.addEventListener("click", (event) => {
    if (!game.gameStarted) return;
    event.stopPropagation();
    event.preventDefault();
    const ele = document.getElementById("instructions_credits-container");

    if (ele.style.visibility === "visible") {
      ele.style.visibility = "hidden";
      game.resume();
      document.getElementById("start_pause").innerHTML = "Pause";
      document.getElementById("canvas-container").style.border = "none";
    } else {
      ele.style.visibility = "visible";
      game.pause();
      document.getElementById("start_pause").innerHTML = "Resume";
      document.getElementById("pause-container").style.visibility = "hidden";
    }
  });
};

export const addMenubarListeners = (gameView, game) => {
  handleStart(gameView, game);
  handleRestart(gameView, game);
  handleInstructions(game);
};
