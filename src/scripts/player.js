import { handleClick } from "./event_handlers/click_listeners";
import { adjustNegativeX, adjustPlayerGoingLeft, adjustPlayerGoingRight, adjustPositiveX, adjustVelocity } from "./Utils/playerUtil";
import { vecUtil } from "./Utils/vecUtil";
import { wallUtil } from "./Utils/wallUtil";
import { arrLevels } from "./wall_layouts/seeds";


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

    this.spidermanSprite = new Image();
    this.spidermanSprite.src = "./assets/sprite_spiderman.png";
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
    let arrWalls = this.currentLevel.arrWalls;
    let { left, right, jumping, impulsing } = this.keydownState;

    if (left) this.velocityX -= 0.5;
    if (right) this.velocityX += 0.5;
    if (jumping && this.jumping === false) {
      this.velocityY -= 20;
      this.jumping = true;
    }

    if (impulsing) {
      this.velocityX += this.unitVec[0] * this.maxImpulse;
      this.velocityY += this.unitVec[1] * this.maxImpulse;
      this.jumping = true;
      // impulsing = false;
      // this.unitVec = [0, 0];
    }

    this.velocityY += 1; // gravity
    this.y += this.velocityY; // change in positionY over time (incremental move)
    this.velocityX *= 0.9;
    this.velocityY *= 0.9;

    // adjust x position based on wall/game logic
    // if (left || (impulsing && this.unitVec[0] < 0)) {
    //   adjustPlayerGoingLeft(this, arrWalls, right, impulsing);
    // }

    // adjustVelocity(
    //   this, arrWalls, [this.velocityX, this.velocityY], right, left, impulsing
    // );
    
    if (this.velocityX < 0) {
      adjustNegativeX(this, arrWalls, right, impulsing);
    }

    if (this.velocityX > 0) {
      adjustPositiveX(this, arrWalls, left, impulsing);
    }

    // console.log(this.velocityX);
    this.x += this.velocityX;
    // if (right || (impulsing && this.unitVec[0] > 0)) {
    //   adjustPlayerGoingRight(this, arrWalls, left, impulsing);
    // }

    // console.log(this.velocityX);

    this.keydownState.impulsing = false;
    this.unitVec = [0, 0];

    if (this.y > 600 - this.height) {
      this.velocityY = 0;
      this.jumping = false;
      this.keydownState.impulsing = false;
      this.y = 600 - this.height;
    }

    ctx.drawImage(
      this.spidermanSprite,
      660,
      0,
      45,
      80,
      this.x,
      this.y,
      this.width,
      this.height
    );
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