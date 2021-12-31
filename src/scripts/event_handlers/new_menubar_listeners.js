export const handleStart = (gameView, game) => {
  const ele = document.getElementById("start_pause");
  ele.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();

    debugger;

    if (ele.innerText === "Start") {
      gameView.start();
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
      game.resume(gameView);
      ele.innerHTML = "Pause";
      document.getElementById("pause-container").style.visibility = "hidden";
      document.getElementById(
        "instructions_credits-container"
      ).style.visibility = "hidden";
      document.getElementById("canvas-container").style.border = "none";
    }
  });
};