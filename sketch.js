
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground,d1,d2,d3;
var engine,world;



function setup() {
 createCanvas(1600, 700);
 engine = Engine.create();
  world = engine.world;
ground=new Ground(800,680,1600,10);	
d1=new Dustbin(1400,670,120,10);
d2=new Dustbin(1340,630,10,90);
d3=new Dustbin(1460,630,10,90);
paper=new Paper(30,280,30);
	Engine.run(engine);
  
}
function draw() {
  
background(0);
Engine.update(engine); 
ground.display();
  paper.display();
  d1.display();
  d2.display();
  d3.display();
}
function keyPressed() {
	 if (keyCode===UP_ARROW)
	 {
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85}) 
	} 
	}




