const camera = { x:0, y:0 };

function updateCamera(target){
  camera.x = target.x - 480;
  camera.y = target.y - 270;
}
