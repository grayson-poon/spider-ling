class Player {
  constructor(sX, sY) { // hopefully change to input starting pos
    this.x = sX;
    this.y = sY;

    // defaults
    this.velocity = 5;
    let spidey = new Image();
    spidey.src = "../../assets/sprite_spiderman.png";
    this.image = spidey;
    this.width = 45; // 40 px
    this.height = 80; // 80 px

    // setting binds
    this.renderPlayer = this.renderPlayer.bind(this);
    // this.move = this.move.bind(this);
    // this.jumpPlayer = this.jumpPlayer.bind(this);
    // this.impulsePlayer = this.impulsePlayer.bind(this);
  }

  renderPlayer(ctx) {
    // only renders image when document loads & will NOT render image any other time
    // you must call ctx.draw image outside the .onload() function
    
    this.image.onload = () => {
      ctx.drawImage(this.image, 655, 0, 45, 80, this.x, this.y, this.width, this.height);
    }

    console.log(ctx);
    console.log(this.image);
    console.log(this.x);
    console.log(this.y);
    ctx.drawImage(this.image, 655, 0, 45, 80, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= this.velocity;
  }

  moveRight() {
    this.x += this.velocity;
  }

  jumpPlayer() {

  }

  impulsePlayer(event) {

  }

}

export default Player;