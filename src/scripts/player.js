import { drawPlayer } from "./draw_player";
import { playerUtil } from "./Utils/playerUtil";
import { vecUtil } from "./Utils/vecUtil";
import { wallUtil } from "./Utils/wallUtil";

class Player {
  constructor(initPos, currentLevel) {
    this.x = initPos[0];
    this.y = initPos[1];
    this.currentLevel = currentLevel;
    
    this.velocityX = 0;
    this.velocityY = 0;
    this.jumping = false;

    this.unitVec = [0, 0];
    this.maxImpulse = 35;
    this.impulsing = false;
    this.impulsingCount = 0;

    this.spidermanSprite = new Image();
    this.spidermanSprite.src = "./assets/sprite_spiderman.png";
    this.spidermanSpriteReversed = new Image();
    this.spidermanSpriteReversed.src = "./assets/sprite_spiderman_reversed.png";
    this.width = 45;
    this.height = 70;
    this.count = 0;

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
      this.velocityX = this.unitVec[0] * this.maxImpulse;
      this.velocityY = this.unitVec[1] * this.maxImpulse;
      this.jumping = true;
    }

    this.velocityY += 1; // gravity
    this.velocityX *= 0.88; // friction
    this.velocityY *= 0.9; // friction
    
    if (this.velocityX < 0) playerUtil.adjustNegativeX(this, arrWalls, right, impulsing, jumping);
    if (this.velocityX > 0) playerUtil.adjustPositiveX(this, arrWalls, left, impulsing, jumping);
    if (this.velocityY > 0) playerUtil.adjustPositiveY(this, arrWalls, jumping, impulsing);
    if (this.velocityY < 0) playerUtil.adjustNegativeY(this, arrWalls, jumping, impulsing);
    if (this.velocityX !== 0 && this.velocityY !== 0) playerUtil.adjustDiagonally(this, arrWalls);

    this.x += this.velocityX;
    this.y += this.velocityY;
    this.keydownState.impulsing = false;
    this.unitVec = [0, 0];

    this.count >= 25 ? this.count = 0 : this.count += 1;
    drawPlayer(
      ctx,
      this.spidermanSprite,
      this.spidermanSpriteReversed,
      this.x,
      this.y,
      this.velocityX,
      this.velocityY,
      left,
      right,
      this.jumping,
      impulsing,
      this.count
    );

    // ctx.drawImage(
    //   this.spidermanSprite,
    //   805,
    //   0,
    //   50,
    //   80,
    //   this.x,
    //   this.y,
    //   45,
    //   70
    // );
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