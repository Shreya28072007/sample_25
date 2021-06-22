
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundIMG;
var dIMG;

function preload()
{
backgroundIMG = loadImage("sprites/background.png");	
//dIMG = loadImage("sprited/dustbingreen.png");
}

function setup() {
	createCanvas(1500,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bar1 = new Dustbin(1200,height-55,100,20);
	
	bar2 = new Dustbin(1140,height-95,20,100);
	bar3 = new Dustbin(1260,height-95,20,100);
	
	paperObject = new Paper(650,200,40);
	groundBody = new Ground(width/2,height-35,width,20);
	Engine.run(engine);
  
}


function draw() {

  background(backgroundIMG);
  rectMode(CENTER);
  
bar1.display();
bar2.display();
bar3.display();

groundBody.display();
paperObject.display();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70,y:-55});
	}
}

