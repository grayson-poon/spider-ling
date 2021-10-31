class Player {
  constructor(sX, sY) {
    this.x = sX;
    this.y = sY;

    // defaults
    this.velocity = 1;
    let spidey = new Image();
    spidey.src = "../../assets/sprite_spiderman.png";
    this.image = spidey;

    this.width = 45; // 40 px
    this.height = 80; // 80 px

    this.renderPlayer = this.renderPlayer.bind(this);
    this.movePlayerLeft = this.movePlayerLeft.bind(this);
    this.movePlayerRight = this.movePlayerRight.bind(this);
    // this.jumpPlayer = this.jumpPlayer.bind(this);
    // this.impulsePlayer = this.impulsePlayer.bind(this);
  }

  renderPlayer(ctx) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.image.onload = () => {
      ctx.drawImage(this.image, 655, 0, 45, 80, this.x, this.y, this.width, this.height);
    }
  }

  movePlayerLeft() {
    this.x -= this.velocity;
  }

  movePlayerRight() {
    this.x += this.velocity;
  }

  // jumpPlayer(event) {
  //   if (event.keyCode === 32) {
  //     console.log("jump/space");
  //   }
  // }

  // impulsePlayer(event) {
  //   console.log(event);
  //   console.log("click");
  // }

}

// document.addEventListener("keydown", (event) => {
//   if (event.keyCode === 65) {
//     test2.movePlayerLeft();
//   } else if (event.keyCode === 68) {
//     test2.movePlayerRight();
//   }
// });

export default Player;