var roof
var bob1
var Rope
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

	roof = new Roof(400,200,800,40)
	bob1 = new bob(100,550, 50)
	bob2 = new bob(250,550, 50)
	bob3 = new bob(400,550, 50)
	bob4 = new bob(550,550, 50)
	bob5 = new bob(700,550, 50)
	Rope1 = new rope(bob1.body, {x:100, y:200})
	Rope2 = new rope(bob2.body, {x:250, y:200})
	Rope3 = new rope(bob3.body, {x:400, y:200})
	Rope4 = new rope(bob4.body, {x:550, y:200})
	Rope5 = new rope(bob5.body, {x:700, y:200})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.run(engine);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  drawSprites();
 
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
		Matter.Body.setPosition(bob2.body, {x: mouseX , y: mouseY});
		Matter.Body.setPosition(bob3.body, {x: mouseX , y: mouseY});
		Matter.Body.setPosition(bob4.body, {x: mouseX , y: mouseY});
		Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
    //}
}




