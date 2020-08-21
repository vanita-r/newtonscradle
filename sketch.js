var bobObject, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var rope;
var bobDiameter=80;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject = new Bob(240,580,39.6);
	bobObject2 = new Bob(320,580,39.6);
	bobObject3 = new Bob(400,580,39.6);
	bobObject4 = new Bob(480,580,39.6);
	bobObject5 = new Bob(560,580,39.6);
	roofObject = new Roof(400,200,400,20);
	rope1 = new Rope(bobObject.body,roofObject.body,-bobDiameter*2,0)
	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*1,0)
	rope3 = new Rope(bobObject3.body,roofObject.body,bobDiameter*0,0)
	rope4 = new Rope(bobObject4.body,roofObject.body,bobDiameter*1,0)
	rope5 = new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0)


	//bobObject2 = new Bob()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject.body,bobObject.body.position,{x:-500,y:-200})
	}
}


