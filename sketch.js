var barco,mar
var marImage, barcoImage

function preload(){

    marImage=loadImage ("sea.png")

    barcoImage=loadAnimation("ship-1.png", "ship-2.png","ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);

 mar= createSprite (200,200,20,20)
  mar.addImage(marImage)
  mar.scale= 0.5
mar.velocityX= -1


var barco= createSprite(200,180,35,50)
barco.addAnimation("barco", barcoImage)
barco.scale=0.3
}

function draw() {
  background("blue");
  
  if (mar.x <50) {
mar.x= 200
  }

  drawSprites();


}
