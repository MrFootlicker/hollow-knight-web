const enemies = [
  {x:600,y:344,w:26,h:26,hp:3,dir:1}
];

function updateEnemies(){
  enemies.forEach(e=>{
    if(e.hp<=0) return;
    e.x += e.dir*1.2;
    if(Math.abs(e.x-player.x)>200) e.dir*=-1;
  });
}

function drawEnemies(ctx){
  ctx.fillStyle="#ff6b6b";
  enemies.forEach(e=>{
    if(e.hp>0) ctx.fillRect(e.x,e.y,e.w,e.h);
  });
}
