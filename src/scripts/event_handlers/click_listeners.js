import { vecUtil } from "../Utils/vecUtil";

const handleClick = (canvas, player) => {
  canvas.addEventListener("click", (event) => {
    event.preventDefault();
    const rect = canvas.getBoundingClientRect();
    let playerPos = [player.x, player.y];
    let clickPos = [event.clientX - rect.left, event.clientY - rect.top];
    let unitVec = vecUtil.normalize(playerPos, clickPos);

    debugger
    return unitVec;
  });
};

export const addClickListener = (canvas, player) => {
  handleClick(canvas, player);
}