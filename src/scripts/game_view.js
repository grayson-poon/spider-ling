import addMenubarEventListeners from "./event_handlers/menubar_listeners";
import addKeydownEventListeners from "./event_handlers/keydown_listeners";
import addClickEventListeners from "./event_handlers/click_listeners";
import { handleInstructions, handleRestart, handleStart } from "./event_handlers/new_menubar_listeners";
import { handleKeydown } from "./event_handlers/new_keydown_listeners";

class GameView {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;

    this.canvas = this.ctx.canvas;
    this.player = this.game.currentPlayer;
    this.level = this.game.currentLevel;

    this.animate = this.animate.bind(this);

    handleStart(this, this.game);
    handleRestart(this.game);
    handleInstructions(this, this.game);

    // document.addEventListener("keydown", this.handleKeydown);

    handleKeydown(this.player, this.level, this.game.pauseStatus);
    addKeydownEventListeners(this.player, this.level, this.game.pauseStatus);
    addClickEventListeners(this.ctx.canvas, this.player);
  }

  animate() {
    if (this.game.pauseStatus === false) {
      this.game.renderFrame(this.ctx);
      window.requestAnimationFrame(this.animate);
    }
  }

  start() {
    window.requestAnimationFrame(this.animate);
  }

  handleKeydown(event) {
    switch (this.game.pauseStatus) {
      case true:
        break;
      case false:
        event.stopPropagation();
        event.preventDefault();

        const key = event.keyCode;
        if (key === 65) {
          this.player.velocityX -= 0.5;
        } else if (key === 68) {
          this.player.velocityX += 0.5;
        } else if (key === 32) {
          this.player.velocityY -= 20;
        }

        this.player.velocityY += 1.5;
        this.player.x += this.player.velocityX;
        this.player.y += this.player.velocityY;
        this.player.velocityX *= 0.9;
        this.player.velocityY *= 0.9;
        break;
      default:
        break;
    }
  }
}

export default GameView;