// import { arrLevels } from "./wall_layouts/seeds"

export const Util = {
  distanceY(player, wall) {
    return (wall.y - player.y - player.height); // 450
  },

  closestWall(player, possibleWalls) {
    let closest;
    let found = false;
    let dy = 0;
    while (found === false) {
      possibleWalls.forEach((wall) => {
        if (wall.containsPoint(player.x, player.y + player.height + dy) ||
            wall.containsPoint(player.x + player.width, player.y + player.height + dy)) {
          closest = wall;
          found = true;
        }
      });
      dy += 1;
    }

    return closest;
  }

}
