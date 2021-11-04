import { wallUtil } from "./modules/wallUtil";
import { vecUtil } from "./modules/vecUtil";
import addMenubarEventListeners from "./event_handlers/menubar_listeners";
import addKeydownEventListeners from "./event_handlers/keydown_listeners";
import addClickEventListeners from "./event_handlers/click_listeners";


class GameView {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;
    this.pauseStatus = false;

    // relations
    this.canvas = this.ctx.canvas;
    this.player = this.game.currentPlayer;
    this.level = this.game.currentLevel;

    // binds
    this.animate = this.animate.bind(this);

    addMenubarEventListeners(this, this.game);
    addKeydownEventListeners(this.player, this.level, this.pauseStatus);
    addClickEventListeners(this.ctx.canvas, this.player);
  }

  animate() {
    if (this.pauseStatus === false) {
      this.game.renderFrame(this.ctx);
      window.requestAnimationFrame(this.animate);
    }
  }

  start() {
    window.requestAnimationFrame(this.animate);
  }

  pause() {
    this.pauseStatus = true;
    addKeydownEventListeners(this.player, this.level, this.pauseStatus);
  }

  resume() {
    this.pauseStatus = false;
    addKeydownEventListeners(this.player, this.level, this.pauseStatus);
    this.start();
  }

  listenDown() {
    document.addEventListener("keydown", this.keydownController);
  }
}

export default GameView;

