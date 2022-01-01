

class Player {
  constructor(initPos) {
    this.x = initPos[0];
    this.y = initPos[1];
    
    this.velocityX = 0;
    this.velocityY = 0;
    // this.jumping = false;

    this.standing = new Image();
    this.standing.src = "./assets/sprite_spiderman.png";

    this.controller = {
      left: false,
      right: false,
      jumping: false,
      keyListener: this.keyListener.bind(this),
    }

    document.addEventListener("keydown", this.controller.keyListener);
    document.addEventListener("keyup", this.controller.keyListener);
  }

  draw(ctx) {
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