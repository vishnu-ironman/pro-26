
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gry;
var trash;

var base1,base2,base3;
var grt

function setup() {
	createCanvas(1800, 600);


	engine = Engine.create();
	world = engine.world;
	
    gry = new Ground(750,590,1800,10)
	trash = new Paper(200,200,50);
	base1 = new dustBin(1420,580,200,20);
	base2 = new  dustBin(1306,490,20,180);
  base3 = new dustBin(1520,490,20,180);
  
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  
 
 
   gry.display()
   trash.display();
   base1.display();
   base2.display();
   base3.display();
   keyPressed();
   drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
  Matter.Body.applyForce(trash.body,trash.body.position,{x:80,y:-30})
	}
}



