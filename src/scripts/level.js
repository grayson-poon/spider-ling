// import { keyFor } from "core-js/fn/symbol";
// import Player from "./player";

// /* IMPORT ALL LAYOUTS INTO THIS FILE */
// import { levelOne } from "./level_layouts/level_one";

class Level {
  constructor(layoutInstance) {
    // this.layout = layout_instance
    this.startingPos = layoutInstance.startingPos;
    this.layout = layoutInstance.structureCb;
    this.winZone = layoutInstance.winZone;
    this.failZonesArr = layoutInstance.failZonesArr;
  }

  renderLevel(ctx) {
    this.layout(ctx);
  }

  winZone() {

  }
}

export default Level;