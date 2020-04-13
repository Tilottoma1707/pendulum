const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder1;
var bob1;
var link1;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
   world = engine.world;

    holder1 = new holder(200,50,200,20);
    bob1 = new bob(200,250);
    link1 = new link(holder1.body,bob1.body);
}

function draw() {
  background(220);
  Engine.update(engine);

  holder1.display();
  bob1.display();
  link1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}