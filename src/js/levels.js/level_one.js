document.addEventListener("keydown", loadLevelOne);

export const loadLevelOne = function(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  ctx.fillStyle = 'black';
  ctx.fillRect(0, canvas.height * 0.75, canvas.width * 0.2, canvas.height * 0.25);

  ctx.fillStyle = 'black';
  ctx.fillRect(canvas.width * 0.35, canvas.height * 0.75, canvas.width * 0.3, canvas.height * 0.25);

  ctx.fillStyle = 'black';
  ctx.fillRect(canvas.width * 0.8, canvas.height * 0.75, canvas.width * 0.2, canvas.height * 0.25);

  ctx.fillStyle = 'black';
  ctx.fillRect(canvas.width * 0.2, canvas.height * 0.5, canvas.width * 0.15, 10);

  ctx.fillStyle = 'black';
  ctx.fillRect(canvas.width * 0.65, canvas.height * 0.5, canvas.width * 0.15, 10);
  
}

