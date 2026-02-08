const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function loop(){
  updatePlayer();
  updateEnemies();
  updateCamera(player);

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.translate(-camera.x,-camera.y);

  drawWorld(ctx);
  drawPlayer(ctx);
  drawEnemies(ctx);

  ctx.restore();

  // UI
  ctx.fillStyle="white";
  ctx.fillText("HP: "+player.hp,20,20);

  requestAnimationFrame(loop);
}
loop();
