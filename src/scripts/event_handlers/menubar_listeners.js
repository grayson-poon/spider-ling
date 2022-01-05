const handleStartPause = (gameView, game) => {
  const ele = document.getElementById("start-pause");

  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();

    switch(ele.innerText) {
      case "Start":
        ele.innerHTML = "Pause";
        document.getElementById("canvas-container").style.border = "none";
        document.getElementById("pause-container").style.visibility = "hidden";
        document.getElementById("about-container").style.visibility = "hidden";
        document.getElementById("controls-container").style.visibility = "hidden";
        
        game.start(gameView);
        break;
      case "Pause":
        ele.innerHTML = "Resume";
        document.getElementById("pause-container").style.visibility = "visible";

        game.pause();
        break;
      case "Resume":
        ele.innerHTML = "Pause";
        document.getElementById("canvas-container").style.border = "none";
        document.getElementById("pause-container").style.visibility = "hidden";
        document.getElementById("about-container").style.visibility = "hidden";
        document.getElementById("controls-container").style.visibility = "hidden";

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
    document.getElementById("about-container").style.visibility = "hidden";
    document.getElementById("controls-container").style.visibility = "hidden";

    game.restartLevel(gameView);
  });
};

const handleAbout = (game) => {
  const ele = document.getElementById("about");
  const content = document.getElementById("about-container");
  
  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();

    debugger

    if (!game.gameStarted) {
      content.style.visibility = "visible";
      document.getElementById("pause-container").style.visibility = "hidden";
      document.getElementById("controls-container").style.visibility = "hidden";
    }

    if (game.gameStarted) {
      switch(content.style.visibility) {
        case "visible":
          content.style.visibility = "hidden";
          document.getElementById("start-pause").innerHTML = "Pause";
          document.getElementById("canvas-container").style.border = "none";
          
          game.resume();
          break;
        case "hidden":
          content.style.visibility = "visible";
          document.getElementById("start-pause").innerHTML = "Resume";
          document.getElementById("pause-container").style.visibility = "hidden";
          document.getElementById("controls-container").style.visibility = "hidden";
          
          game.pause();
          break;
      }
    }
  });
};

const handleControls = (game) => {
  const ele = document.getElementById("controls");
  const content = document.getElementById("controls-container");

  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();

    debugger
    if (!game.gameStarted) {
      content.style.visibility = "visible";
      document.getElementById("pause-container").style.visibility = "hidden";
      document.getElementById("about-container").style.visibility = "hidden";
    }

    if (game.gameStarted) {
      switch(content.style.visibility) {
        case "visible":
          content.style.visibility = "hidden";
          document.getElementById("start-pause").innerHTML = "Pause";
          document.getElementById("canvas-container").style.border = "none";
          
          game.resume();
          break;
        case "hidden":
          content.style.visibility = "visible";
          document.getElementById("start-pause").innerHTML = "Resume";
          document.getElementById("pause-container").style.visibility = "hidden";
          document.getElementById("about-container").style.visibility = "hidden";
          
          game.pause();
          break;
      }
    }
  });
}

export const addMenubarListeners = (gameView, game) => {
  handleStartPause(gameView, game);
  handleRestart(gameView, game);
  handleAbout(game);
  handleControls(game);
};
