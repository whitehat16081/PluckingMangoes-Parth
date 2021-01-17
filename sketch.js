
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var stone1;

var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	mango1=new mango(1100,100,30);
	mango2=new mango(1190,200,30);
	mango3 = new mango(1000,200,30);
	mango4 = new mango(900,200,30);
	mango5 = new mango(1000,100,30)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1 = new Stone(200,430,40);
	rope = new Rope(stone1.body, {x:250 , y:430});
	
	

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango2.display();
  mango1.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rope.display();
 stone1.display();
  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}