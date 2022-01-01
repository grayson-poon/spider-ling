import { handleClick } from "./event_handlers/click_listeners";
import { adjustPlayerGoingLeft } from "./Utils/playerUtil";
import { vecUtil } from "./Utils/vecUtil";


class Player {
  constructor(initPos, currentLevel) {
    this.x = initPos[0];
    this.y = initPos[1];
    this.currentLevel = currentLevel;
    
    this.velocityX = 0;
    this.velocityY = 0;
    this.jumping = false;

    this.unitVec = [0, 0];
    this.maxImpulse = 30;
    this.impulsing = false;

    this.standing = new Image();
    this.standing.src = "./assets/sprite_spiderman.png";
    this.width = 35;
    this.height = 70;

    this.keydownState = {
      left: false,
      right: false,
      jumping: false,
      impulsing: false,
      keydownController: this.keydownController.bind(this),
      clickController: this.clickController.bind(this),
    }
  }

  draw(ctx) {
    if (this.keydownState.left) this.velocityX -= 0.5;
    if (this.keydownState.right) this.velocityX += 0.5;
    if (this.keydownState.jumping && this.jumping === false) {
      this.velocityY -= 20;
      this.jumping = true;
    }
    if (this.keydownState.impulsing) {
      this.velocityX += (this.unitVec[0] * this.maxImpulse);
      this.velocityY += (this.unitVec[1] * this.maxImpulse);
      this.keydownState.impulsing = false;
      this.unitVec = [0, 0];
    }

    this.velocityY += 1;
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.velocityX *= 0.9;
    this.velocityY *= 0.9;

    if (this.y > 600 - this.height) {
      this.velocityY = 0;
      this.jumping = false;
      this.impulsing = false;
      this.y = 600 - this.height;
    }

    ctx.drawImage(this.standing, 660, 0, 45, 80, this.x, this.y, this.width, this.height);
  }

  keydownController(event) {
    event.stopPropagation();
    event.preventDefault();
    let keyState = event.type === "keydown" ? true : false;

    switch(event.keyCode) {
      case 65:
        this.keydownState.left = keyState;
        break;
      case 68:
        this.keydownState.right = keyState;
        break;
      case 32:
        this.keydownState.jumping = keyState;
        break;
      default:
        return;
    }
  }

  clickController(event) {
    event.stopPropagation();
    event.preventDefault();
    this.keydownState.impulsing = true;
    const rect = event.currentTarget.getBoundingClientRect();
    const clickPos = [event.clientX - rect.left, event.clientY - rect.top];
    this.unitVec = vecUtil.normalize([this.x, this. y], clickPos);
  }
}

export default Player;