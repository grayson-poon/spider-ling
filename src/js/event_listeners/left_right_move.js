// import Player from "../player";

document.addEventListener("keydown", (event) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext('2d');
  
  let spidey = new Image();
  spidey.src = "../../../assets/sprite_spiderman.png";
  console.log(spidey);
  
  let test2 = new Player(250, 300, spidey, canvas, ctx);
  test2.renderPlayer(ctx, spidey);
  console.log(test2);

  if (event.keyCode === 65) {
    test2.movePlayerLeft();
    console.log(test2);
  } else if (event.keyCode === 68) {
    test2.movePlayerRight();
    console.log(test2);
  }

  console.log(ctx);
  test2.renderPlayer(ctx, spidey);
});

// spidey.onload = () => {
//   ctx.drawImage(spidey, 655, 0, 45, 80, 50, 50, 50, 80);
// }

// let test = new Player(350, 350, spidey, canvas, ctx);
// console.log(test);
