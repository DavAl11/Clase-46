var player;
var building
var jetImage;
var buildingImage;
var Bomb

function preload() {
  jetImage = loadImage("assets/Jet.png");
  buildingImage = loadImage("assets/Edificios.png")
  bombImage = loadImage("assets/Bomb.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ;
  player = createSprite(windowWidth / 2, windowHeight / 2);
  player.addAnimation("jetImage", jetImage);
  player.scale = 0.4

  building = createSprite(windowWidth / 2, windowHeight-250);
  building.addAnimation("buildingImage", buildingImage);
  building.scale = 1
}

function draw() {
  edges = createEdgeSprites();

  background("lightblue");

  drawSprites();

  if (keyDown("w")) {
    player.y = player.y - 12
  }
  if (keyDown("s")) {
    player.y = player.y + 12
  }
  if (keyDown("a")) {
    player.x = player.x - 12
  }
  if (keyDown("d")) {
    player.x = player.x + 12
  }

  player.bounceOff(edges);

}

function spawnBomb(){
  if(frameCount%60===0){
    var num=Math.round(random(0,windowWidth))
    var bomb=createSprite(num,0);
  }
}
