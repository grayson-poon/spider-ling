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

  renderPlayer(ctx, image) {
    // console.log(ctx);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.image.onload = () => {
      ctx.drawImage(image, 655, 0, 45, 80, this.x, this.y, this.width, this.height);
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

// const canvas = document.createElement("canvas");
// const ctx = canvas.getContext('2d');

// let spidey = new Image();
// spidey.src = "../../../assets/sprite_spiderman.png";
// console.log(spidey);

// let test2 = new Player(250, 300, spidey, canvas, ctx);
// test2.renderPlayer(ctx, spidey);
// console.log(test2);

// document.addEventListener("keydown", (event) => {
//   if (event.keyCode === 65) {
//     test2.movePlayerLeft();
//   } else if (event.keyCode === 68) {
//     test2.movePlayerRight();
//   }
// });

// document.addEventListener("click", (event) => {
//   this.impulse(event);
//   console.log(event.target);
// });

// document.addEventListener("keydown", (event) => {
//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext('2d');
  
//   let spidey = new Image();
//   spidey.src = "../../../assets/sprite_spiderman.png";
//   console.log(spidey);
  
//   let test2 = new Player(250, 300, spidey, canvas, ctx);
//   test2.renderPlayer(ctx, spidey);
//   console.log(test2);

//   if (event.keyCode === 65) {
//     test2.movePlayerLeft();
//     console.log(test2);
//   } else if (event.keyCode === 68) {
//     test2.movePlayerRight();
//     console.log(test2);
//   }

//   console.log(ctx);
//   test2.renderPlayer(ctx, spidey);
// });


export default Player;