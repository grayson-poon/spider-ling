export const zoneUtil = {
  insideZone(player, zoneObject) {
    if (zoneObject.x < player.x + player.width &&
        zoneObject.x + zoneObject.width > player.x && 
        zoneObject.y < player.y + player.height &&
        zoneObject.y + zoneObject.height > player.y) {
          return true;
        } else {
          return false;
        }
  }
}