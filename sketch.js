const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(650, 370, 100, 10);
  paper = new Paper(200, 300, 10);
  ground = Bodies.rectangle(width / 2, 380, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {

  background("grey");
   rectMode(CENTER);


dustbin.display();
paper.display();
rect(ground.position.x,ground.position.y,width,10);






}


function keyPressed(){
  if (keyCode === UP_ARROW ) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:12,y:-12 });
  }
}
