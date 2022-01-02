const handleStartPause = (gameView, game) => {
  const ele = document.getElementById("start-pause");

  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();

    switch(ele.innerText) {
      case "Start":
        ele.innerHTML = "Pause";
        document.getElementById("canvas-container").style.border = "none";
        document.getElementById("instructions-credits-container").style.visibility = "hidden";
        
        game.start(gameView);
        break;
      case "Pause":
        ele.innerHTML = "Resume";
        document.getElementById("pause-container").style.visibility = "visible";

        game.pause();
        break;
      case "Resume":
        ele.innerHTML = "Pause";
        document.getElementById("pause-container").style.visibility = "hidden";
        document.getElementById("instructions-credits-container").style.visibility = "hidden";
        document.getElementById("canvas-container").style.border = "none";

        game.resume();
        break;
    }
  });
};

const handleRestart = (gameView, game) => {
  const ele = document.getElementById("restart");

  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!game.gameStarted) return;

    document.getElementById("start-pause").innerText = "Pause";
    document.getElementById("pause-container").style.visibility = "hidden";
    document.getElementById("instructions-credits-container").style.visibility = "hidden";

    game.restartLevel(gameView);
  });
};

const handleInstructionsCredits = (game) => {
  const ele = document.getElementById("instructions-credits");
  
  ele.addEventListener("click", (event) => {
    if (!game.gameStarted) return;
    event.stopPropagation();
    event.preventDefault();
    const content = document.getElementById("instructions-credits-container");

    if (content.style.visibility === "visible") {
      content.style.visibility = "hidden";
      document.getElementById("start-pause").innerHTML = "Pause";
      document.getElementById("canvas-container").style.border = "none";
      
      game.resume();
    } else {
      content.style.visibility = "visible";
      document.getElementById("start-pause").innerHTML = "Resume";
      document.getElementById("pause-container").style.visibility = "hidden";
      
      game.pause();
    }
  });
};

export const addMenubarListeners = (gameView, game) => {
  handleStartPause(gameView, game);
  handleRestart(gameView, game);
  handleInstructionsCredits(game);
};
