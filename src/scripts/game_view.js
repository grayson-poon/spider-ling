import Game from "./game";
import { arrLevels } from "./levels/seeds";
import { addMenubarListeners } from "./event_handlers/menubar_listeners";
import { addCanvasHtmlListeners } from "./event_handlers/canvas_html_listeners";

export default class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.arrLevels = arrLevels
    this.game = new Game(this.arrLevels, this);
    this.activeMenubar = true;

    addMenubarListeners(this, this.game);
    addCanvasHtmlListeners(this, this.game);
  }

  newGame() {
    this.activeMenubar = true;
    this.game = new Game(this.arrLevels, this);
    return this.game;
  }
}