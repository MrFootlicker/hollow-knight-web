const enemies = [
  {x:500,y:432,w:32,h:32,hp:3,dir:1},
  {x:800,y:272,w:32,h:32,hp:3,dir:-1}
];

function updateEnemies(){
  enemies.forEach(e=>{
    if(e.hp<=0) return;
    e.x += e.dir * 1.2;
    if(Math.abs(e.x-player.x)>200) e.dir*=-1;
  });
}

function drawEnemies(ctx){
  enemies.forEach(e=>{
    if(e.hp>0) ctx.drawImage(assets.enemy, e.x, e.y, e.w, e.h);
  });
}
