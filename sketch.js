const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body;

var myengine, myworld, ground;
var paper,ground,bin2,bin2,bin3;
function setup() {
createCanvas(1600,500);

engine = Engine.create();
  world = engine.world;
  
  paper = new Paper(200,250,40)
  ground = new Ground(800,480,1600,10);
  bin1 = new DustBin(1100,380,20,189)
  bin2 = new DustBin(1290,380,20,189)
  bin3 = new DustBin(1195,467,169,15)
  Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-350})
	}
}