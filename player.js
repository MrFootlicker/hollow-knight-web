const player = {
  x:100, y:400, w:32, h:48,
  vx:0, vy:0,
  speed:4, jump:-13, dash:0,
  onGround:false, facing:1,
  hp:5
};

function updatePlayer(){
  if(keys.a||keys.arrowleft){ player.vx=-player.speed; player.facing=-1; }
  else if(keys.d||keys.arrowright){ player.vx=player.speed; player.facing=1; }
  else player.vx*=0.8;

  if((keys.w||keys.space) && player.onGround){
    player.vy=player.jump;
    player.onGround=false;
  }

  if(keys.k && player.dash<=0){
    player.dash=10;
    player.vx=player.facing*12;
  }
  if(player.dash>0) player.dash--;

  player.vy += 0.7; // gravity
  player.x += player.vx;
  player.y += player.vy;

  player.onGround=false;
  platforms.forEach(p=>{
    if(player.x<p.x+p.w && player.x+player.w>p.x &&
       player.y<p.y+p.h && player.y+player.h>p.y &&
       player.vy>0){
      player.y=p.y-player.h;
      player.vy=0;
      player.onGround=true;
    }
  });
}

function drawPlayer(ctx){
  ctx.drawImage(assets.knight, player.x, player.y, player.w, player.h);
}

 
