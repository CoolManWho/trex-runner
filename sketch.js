var trex ,trex_running;
var ground, ground_image;
var invisable_ground

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  ground_image = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
trex = createSprite(60, 150, 5, 5)
trex.addAnimation("trex", trex_running)
trex.scale = 0.6

ground = createSprite(300, 180, 600, 20)
ground.addImage("ground", ground_image)
ground.velocityX = -2

invisable_ground = createSprite(300, 190, 600, 20)
invisable_ground.visible = false
}

function draw(){
background("white")

console.log(trex.y)

if (keyDown("space") && trex.y >= 100) {
trex.velocityY = -10
}

if (ground.x < 0){
  ground.x = width/2
}

trex.velocityY = trex.velocityY + 0.8

trex.collide(invisable_ground)

drawSprites()
}
