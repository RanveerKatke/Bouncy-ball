const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//nameSpacing

var myEngine,myWorld,object,ground;

function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
 var ball_options = {
restitution : 0.8
 }

 var ground_options= {
isStatic : true

 }
 ground = Bodies.rectangle(400,390,800,20,ground_options);
  object = Bodies.circle(200,100,20,ball_options);
  

  World.add(myWorld,object);
World.add(myWorld,ground);

  console.log(object);
}

function draw() {
  background(0);  
  


  Engine.update(myEngine);

rectMode(CENTER);

rect(ground.position.x,ground.position.y,800,20);

 ellipseMode(RADIUS);

 ellipse(object.position.x,object.position.y,20,20);
}