class Player {
  constructor(initPos) {
    this.x = initPos[0];
    this.y = initPos[1];

    // collisions
    this.collisionLeft = false;
    this.collisionRight = false;
    this.collisionTop = false;
    this.collisionBottom = false;

    // defaults
    this.velocity = 10;
    let spidey = new Image();
    spidey.src = "../../assets/sprite_spiderman.png";
    this.image = spidey;
    this.width = 25;
    this.height = 45;

    // setting binds
    this.renderPlayer = this.renderPlayer.bind(this);
    // this.jumpPlayer = this.jumpPlayer.bind(this);
    // this.impulsePlayer = this.impulsePlayer.bind(this);
  }

  renderPlayer(ctx) {
    // only renders image when document loads & will NOT render image any other time
    // you must call ctx.draw image outside the .onload() function
    // images need the .onload() method, native canvas drawings do not
    this.image.onload = () => { 
      ctx.drawImage(this.image, 655, 0, 45, 80, this.x, this.y, this.width, this.height);
    } // refactor this later to be variables for standingSpideyX1, standingSpideyY1, etc) break into multi lined arguments

    ctx.drawImage(this.image, 655, 0, 45, 80, this.x, this.y, this.width, this.height);
  }

  left() {
    this.x -= this.velocity;
  }

  right() {
    this.x += this.velocity;
  }

  up() {
    this.y -= this.velocity;
  }

  down() {
    this.y += this.velocity;
  }

  jump() {

  }

  impulse(event) {

  }

  inWinZone(layout) { // return a boolean based on input layout

  }

}

export default Player;