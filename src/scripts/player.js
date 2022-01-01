import { adjustPlayerGoingLeft } from "./Utils/playerUtil";


class Player {
  constructor(initPos, currentLevel) {
    this.x = initPos[0];
    this.y = initPos[1];
    this.currentLevel = currentLevel;
    
    this.velocityX = 0;
    this.velocityY = 0;
    this.jumping = false;

    this.standing = new Image();
    this.standing.src = "./assets/sprite_spiderman.png";
    this.width = 35;
    this.height = 70;

    this.controller = {
      left: false,
      right: false,
      jumping: false,
      keyListener: this.keyListener.bind(this),
    }

    // document.addEventListener("keydown", this.controller.keyListener);
    // document.addEventListener("keyup", this.controller.keyListener);
  }

  draw(ctx) {
    if (this.controller.left) {
      this.velocityX -= 0.5;
    };

    if (this.controller.right) this.velocityX += 0.5;
    if (this.controller.jumping && this.jumping === false) {
      this.velocityY -= 20;
      this.jumping = true;
    }

    this.velocityY += 1;
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.velocityX *= 0.9;
    this.velocityY *= 0.9;

    if (this.y > 600 - this.height) {
      this.velocityY = 0;
      this.jumping = false;
      this.y = 600 - this.height;
    }

    console.log(this.velocityY);
    ctx.drawImage(this.standing, 660, 0, 45, 80, this.x, this.y, this.width, this.height);
  }

  keyListener(event) {
    let keyState = event.type === "keydown" ? true : false;

    switch(event.keyCode) {
      case 65:
        this.controller.left = keyState;
        break;
      case 68:
        this.controller.right = keyState;
        break;
      case 32:
        this.controller.jumping = keyState;
        break;
      default:
        return;
    }
  }
}

export default Player;