const player = {
  x:100,y:300,w:24,h:36,
  vx:0,vy:0,
  speed:4,
  jump:-13,
  facing:1,
  onGround:false,
  dash:0,
  hp:5
};

function updatePlayer(){
  // movement
  if(keys.a||keys.arrowleft){
    player.vx = -player.speed;
    player.facing = -1;
  } else if(keys.d||keys.arrowright){
    player.vx = player.speed;
    player.facing = 1;
  } else {
    player.vx *= 0.8;
  }

  // jump
  if((keys.w||keys[" "]) && player.onGround){
    player.vy = player.jump;
    player.onGround = false;
  }

  // dash
  if(keys.k && player.dash<=0){
    player.dash = 10;
    player.vx = player.facing * 12;
  }
  if(player.dash>0) player.dash--;

  // physics
  player.vy += GRAVITY;
  player.x += player.vx;
  player.y += player.vy;

  player.onGround = false;
  platforms.forEach(p=>{
    if(
      player.x<p.x+p.w &&
      player.x+player.w>p.x &&
      player.y<p.y+p.h &&
      player.y+player.h>p.y &&
      player.vy>0
    ){
      player.y = p.y-player.h;
      player.vy = 0;
      player.onGround = true;
    }
  });
}

function drawPlayer(ctx){
  // knight silhouette (NOT a cube now)
  ctx.fillStyle="#eaeaff";
  ctx.beginPath();
  ctx.arc(player.x+12,player.y+10,8,Math.PI,0);
  ctx.fill();
  ctx.fillRect(player.x+6,player.y+10,12,26);
}
