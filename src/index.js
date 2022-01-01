import GameView from "./scripts/game_view";

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext('2d');

  new GameView(ctx);
});

// const start_pause = document.getElementById("start_pause");
// start_pause.addEventListener("click", (event) => {
//   event.stopPropagation();
//   event.preventDefault();

//   if (ele.innerText === "Start") {
//     ele.innerHTML = "Pause";
//     document.getElementById("canvas-container").style.border = "none";
//     document.getElementById("instructions_credits-container").style.visibility =
//       "hidden";
//   } else if (ele.innerText === "Pause") {
//     ele.innerHTML = "Resume";
//     document.getElementById("pause-container").style.visibility = "visible";
//   } else if (ele.innerText === "Resume") {
//     ele.innerHTML = "Pause";
//     document.getElementById("pause-container").style.visibility = "hidden";
//     document.getElementById("instructions_credits-container").style.visibility =
//       "hidden";
//     document.getElementById("canvas-container").style.border = "none";
//   }
// })