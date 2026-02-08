const GRAVITY = 0.7;

const platforms = [
  {x:-500,y:480,w:3000,h:80},
  {x:200,y:380,w:200,h:20},
  {x:550,y:300,w:200,h:20},
  {x:900,y:240,w:200,h:20}
];

function drawWorld(ctx){
  ctx.fillStyle="#2a2f55";
  platforms.forEach(p=>{
    ctx.fillRect(p.x,p.y,p.w,p.h);
  });
}
