
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, ball, dustbinSide1, dustbinSide2, dustbinBase

function preload()
{
	
}

function setup() {
	createCanvas(1250, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(650,400,1300,20)
	ground.shapeColor = "yellow";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



