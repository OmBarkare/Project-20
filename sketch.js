var car, wall;
var speed, weight, carVelocity;
var deformation, collide;
var dist
function setup() {
  createCanvas(800,400);
  //car = createSprite(50, 400, 50, 50);
  speed = random(50,120);
  carVelocity = speed/10;
  car = createSprite(100,200,20,20);
  car.velocityX = carVelocity;

  rectMode(CENTER);
  wall = createSprite(700,200,10,200);
  wall.shapeColor = "brown";
  weight = random(500,1500);
  deformation = ((0.5*weight*speed*speed)/22500)
  num = 5;
  collide = false;
}

function draw() {
  background(220);

  car.collide(wall);
  text("car",car.x - 10,180);
  dist = (wall.x - car.x);

  if(dist < 20){
    text("deformation"+deformation,50,50);

    if(deformation < 100){
      car.shapeColor = "green";
      textSize(16);
      text("safe to go", 300,200);
    } 
   else if(deformation >= 100 && deformation < 180){
     car.shapeColor = "yellow";
     textSize(16);
     text("needs improvement",300,200);
    }
   else if(deformation > 180){
      car.shapeColor = "red";
      textSize(16);
      text("not safe",300,200);
   }
  }

//  console.log(collide);

  drawSprites();
}