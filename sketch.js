const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig,log_1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,320,70,70);
    pig = new Pig(900,320);
    box2 = new Box(1000,320,70,70);
    log_1 = new Log(900,260,300,PI/2);


    box3 = new Box(800,240,70,70);
    pig_2 = new Pig(900,240);
    box4 = new Box(1000,240,70,70);
    log_2 = new Log(900,180,300,PI/2);



    box5 = new Box(900,160,70,70);
    log3 = new Log(860,120,150,PI/7);
    log4 = new Log(960,125,140,-PI/7);


    bird = new Bird(100,100);
    ground = new Ground(600,380,width,20);
};

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig.display();
    log_1.display();


    box4.display();
    box3.display();
    pig_2.display();
    log_2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}