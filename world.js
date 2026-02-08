const platforms = [
  {x:0,y:480,w:300,h:60},
  {x:400,y:380,w:200,h:20},
  {x:700,y:300,w:200,h:20},
  {x:1050,y:250,w:200,h:20}
];

const bgLayers = [
  {color: "#11162b", offset: 0.2}, // far back
  {color: "#1a2040", offset: 0.5}  // mid
];

function drawWorld(ctx){
  // draw background layers
  bgLayers.forEach(layer => {
    ctx.fillStyle = layer.color;
    ctx.fillRect(camera.x*layer.offset, camera.y*layer.offset, 3000, 540);
  });

  // draw platforms
  platforms.forEach(p=>{
    ctx.drawImage(assets.platform, p.x, p.y, p.w, p.h);
  });
}
