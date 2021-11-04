import { vecUtil } from "../Utils/vecUtil";

export default function addClickEventListeners(canvas, player) {
  addClickListener(canvas, player);
}

function addClickListener(canvas, player) {
  canvas.addEventListener("click", handleClick(canvas, player));
}

function handleClick(canvas, player) {
  return function(event) {
    event.preventDefault();

    const rect = canvas.getBoundingClientRect();
    let playerPos = [player.x, player.y];
    let clickPos = [event.clientX - rect.left, event.clientY - rect.top];
    let unitVec = vecUtil.normalize(playerPos, clickPos);

    player.impulse(unitVec);
  }
}