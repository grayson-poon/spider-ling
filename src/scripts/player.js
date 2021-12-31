import { zoneUtil } from "./Utils/zoneUtil";
import { wallUtil } from "./Utils/wallUtil";

class Player {
  constructor(initPos) {
    this.x = initPos[0];
    this.y = initPos[1];
    this.pos = [this.x, this.y];
    
    this.velocity = 0;
    this.velocityY = 0;
    this.velocityX = 0;
    this.acceleration = 3;
    this.jumping = false;
    this.maxJumpHeight = 50;
    this.maxImpulse = 200;

    let spidey = new Image();
    spidey.src = "./assets/sprite_spiderman.png";
    this.image = spidey;
    this.width = 35;
    this.height = 70;

    this.renderPlayer = this.renderPlayer.bind(this);
  }

  renderPlayer(ctx) {
    this.image.onload = () => { 
      ctx.drawImage(this.image, 660, 0, 45, 80, this.x, this.y, this.width, this.height);
    }

    // this.gravity();



    console.log(this.velocityY);
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
    this.x += (unitVec[0] * this.maxImpulse);
    this.y += (unitVec[1] * this.maxImpulse);
  }

  inWinZone(winZone) {
    return zoneUtil.insideZone(this, winZone);
  }

  inFailZone(failZones) {
    for (let i = 0; i < failZones.length; i++) {
      let zone = failZones[i];
      if (zoneUtil.insideZone(this, zone)) return true;
    }
    return false;
  }

  gravityStep() {
    this.velocityY += 1;
    this.y += this.velocityY;
    this.velocityY *= 0.9;

    if (this.y > 400) {
      this.y = 400;
      this.velocityY = 0;
    }
  }
}

export default Player;