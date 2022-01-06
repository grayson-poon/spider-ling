const handleStartPause = (gameView) => {
  const ele = document.getElementById("start-pause");

  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!gameView.activeMenubar) return;

    switch(ele.innerText) {
      case "Start":
        ele.innerHTML = "Pause";
        document.getElementById("canvas-container").style.border = "none";
        document.getElementById("pause-container").style.visibility = "hidden";
        document.getElementById("about-container").style.visibility = "hidden";
        document.getElementById("controls-container").style.visibility = "hidden";
        document.getElementById("fail-container").style.visibility = "hidden";
        document.getElementById("win-container").style.visibility = "hidden";
        
        gameView.game.start();
        break;
      case "Pause":
        ele.innerHTML = "Resume";
        document.getElementById("pause-container").style.visibility = "visible";

        gameView.game.pause();
        break;
      case "Resume":
        ele.innerHTML = "Pause";
        document.getElementById("canvas-container").style.border = "none";
        document.getElementById("pause-container").style.visibility = "hidden";
        document.getElementById("about-container").style.visibility = "hidden";
        document.getElementById("controls-container").style.visibility = "hidden";
        document.getElementById("fail-container").style.visibility = "hidden";
        document.getElementById("win-container").style.visibility = "hidden";

        gameView.game.resume();
        break;
    }
  });
};

const handleRestart = (gameView) => {
  const ele = document.getElementById("restart");

  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!gameView.game.gameStarted || !gameView.activeMenubar) return;

    document.getElementById("start-pause").innerText = "Pause";
    document.getElementById("pause-container").style.visibility = "hidden";
    document.getElementById("about-container").style.visibility = "hidden";
    document.getElementById("controls-container").style.visibility = "hidden";
    document.getElementById("fail-container").style.visibility = "hidden";
    document.getElementById("win-container").style.visibility = "hidden";

    gameView.game.restartLevel();
  });
};

const handleAbout = (gameView) => {
  const ele = document.getElementById("about");
  const content = document.getElementById("about-container");
  
  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!gameView.activeMenubar) return;

    if (!gameView.game.gameStarted) {
      content.style.visibility = "visible";
      document.getElementById("pause-container").style.visibility = "hidden";
      document.getElementById("controls-container").style.visibility = "hidden";
      document.getElementById("fail-container").style.visibility = "hidden";
      document.getElementById("win-container").style.visibility = "hidden";
    }

    if (gameView.game.gameStarted) {
      switch(content.style.visibility) {
        case "visible":
          content.style.visibility = "hidden";
          document.getElementById("start-pause").innerHTML = "Pause";
          document.getElementById("canvas-container").style.border = "none";
          
          gameView.game.resume();
          break;
        case "hidden":
          content.style.visibility = "visible";
          document.getElementById("start-pause").innerHTML = "Resume";
          document.getElementById("pause-container").style.visibility = "hidden";
          document.getElementById("controls-container").style.visibility = "hidden";
          document.getElementById("fail-container").style.visibility = "hidden";
          document.getElementById("win-container").style.visibility = "hidden";
          
          gameView.game.pause();
          break;
      }
    }
  });
};

const handleControls = (gameView) => {
  const ele = document.getElementById("controls");
  const content = document.getElementById("controls-container");

  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!gameView.activeMenubar) return;

    if (!gameView.game.gameStarted) {
      content.style.visibility = "visible";
      document.getElementById("pause-container").style.visibility = "hidden";
      document.getElementById("about-container").style.visibility = "hidden";
      document.getElementById("fail-container").style.visibility = "hidden";
      document.getElementById("win-container").style.visibility = "hidden";
    }

    if (gameView.game.gameStarted) {
      switch (content.style.visibility) {
        case "visible":
          content.style.visibility = "hidden";
          document.getElementById("start-pause").innerHTML = "Pause";
          document.getElementById("canvas-container").style.border = "none";

          gameView.game.resume();
          break;
        case "hidden":
          content.style.visibility = "visible";
          document.getElementById("start-pause").innerHTML = "Resume";
          document.getElementById("pause-container").style.visibility = "hidden";
          document.getElementById("about-container").style.visibility = "hidden";
          document.getElementById("fail-container").style.visibility = "hidden";
          document.getElementById("win-container").style.visibility = "hidden";

          gameView.game.pause();
          break;
      }
    }
  });
}

export const addMenubarListeners = (gameView) => {
  handleStartPause(gameView);
  handleRestart(gameView);
  handleAbout(gameView);
  handleControls(gameView);
};