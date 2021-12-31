import Player from "./player";
import { wallUtil } from "./Utils/wallUtil";
import addKeydownEventListeners from "./event_handlers/keydown_listeners";

class Game {
  constructor(arrLevels) {
    this.allLevels = arrLevels;
    this.currentLevel = arrLevels.shift();
    this.currentPlayer = new Player(this.currentLevel.startingPos);
    this.done = false;
    this.pauseStatus = false;
  }
}

export default Game;