const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1, box2, box3, box4, box5;
var ground;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,200,70,70);

    ground = new Ground(600, 380, 1200, 10);

    pig1 = new Pig(810,350)
    pig2 = new Pig(810,240)

    log1 = new Log(810, 260, 300, PI/2)
    log2 = new Log(810, 200, 300, PI/2)
    log3 = new Log(760, 120, 150, PI/7)
    log4 = new Log(870, 120, 150, -PI/7)

    bird = new Bird(100,100)
    
    
}

function draw(){
    background(0);
    Engine.update(myEngine);
    
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    pig2.display();
    log2.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    
}
