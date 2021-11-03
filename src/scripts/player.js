import { vecUtil } from "./modules/vecUtil";

class Player {
  constructor(initPos) {
    this.x = initPos[0];
    this.y = initPos[1];
    this.pos = [this.x, this.y];
    
    // defaults
    this.velocity = 10;
    this.acceleration = 3;
    this.jumping = false;
    this.maxJumpHeight = 50;
    this.maxImpulse = 75;

    // image defaults
    let spidey = new Image();
    spidey.src = "../../assets/sprite_spiderman.png";
    this.image = spidey;
    this.width = 35;
    this.height = 70;

    // setting binds
    this.renderPlayer = this.renderPlayer.bind(this);

  }

  renderPlayer(ctx) {
    // only renders image when document loads & will NOT render image any other time
    // you must call ctx.draw image outside the .onload() function
    // images need the .onload() method, native canvas drawings do not
    // this.image.onload = () => { 
    //   ctx.drawImage(this.image, 660, 0, 45, 80, this.x, this.y, this.width, this.height);
    // } // refactor this later to be variables for standingSpideyX1, standingSpideyY1, etc) break into multi lined arguments

    ctx.drawImage(this.image, 660, 0, 45, 80, this.x, this.y, this.width, this.height);
  }

  left() {
    this.x -= this.velocity;
  }

  right() {
    this.x += this.velocity;
  }

  jump() {
    let originalYPos = this.y;

    let jumpUp = setInterval(() => {
      if (this.y < originalYPos - this.maxJumpHeight) {
        clearInterval(jumpUp);
        let jumpDown = setInterval(() => {
          if (this.y >= originalYPos) {
            clearInterval(jumpDown);
            this.jumping = false;
            return;
          }
          this.y += this.velocity;
        }, 25);
      }
      this.y -= this.velocity;
    }, 25);
  }

  impulse(unitVec) {
    // this.x += (unitVec[0] * this.maxImpulse);
    // this.y += (unitVec[1] * this.maxImpulse);

    


  }

  inWinZone(layout) { // return a boolean based on input layout

  }

}

export default Player;