
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ground2,ground3;
var division1,division2,division3,division4;
var plinkos,plinkos1,plinkos2,plinkos3,plinkos4,plinkos5,plinkos6,plinkos7,plinkos8,plinkos9;
var particles

function preload()
{
	
}

function setup() {  
	createCanvas(480,600);
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	// my ground
	ground = new Ground (600,height,1500,20)
	ground2 = new Ground(478,height,15,1500)
	ground3 = new Ground(3,height,15,1500)


	particles= new Particles(342,54,34)	
	

	//divisions
	
	division1 = new Divisions(88,500,12,243)
	division2 = new Divisions(186,500,12,243)
	division3 = new Divisions(274,500,12,243)
	division4 = new Divisions(364,500,12,243)

	//plinkos first level
	
	plinkos=new Plinko(50,242,15)
	plinkos1=new Plinko(100,242,15)
	plinkos2=new Plinko(150,242,15)
	plinkos3=new Plinko(200,242,15)
	plinkos4=new Plinko(250,242,15)
	plinkos5=new Plinko(300,242,15)
	plinkos6=new Plinko(350,242,15)
	plinkos7=new Plinko(400,242,15)
	plinkos8=new Plinko(450,242,15)
	plinkos9=new Plinko(500,242,15)
		
	//plinko second level
	plinkosA=new Plinko(70,180,15)
	plinkosB=new Plinko(120,180,15)
	plinkosC=new Plinko(170,180,15)
	plinkosD=new Plinko(220,180,15)
	plinkosE=new Plinko(270,180,15)
	plinkosF=new Plinko(320,180,15)
	plinkosG=new Plinko(370,180,15)
	plinkosH =new Plinko(420,180,15) 

	//plinko third level
	plinkos2A=new Plinko(50,110,15)
	plinkos2B=new Plinko(100,110,15)
	plinkos2C=new Plinko(150,110,15)
	plinkos2D=new Plinko(200,110,15)
	plinkos2E=new Plinko(250,110,15)
	plinkos2F=new Plinko(300,110,15)
	plinkos2G=new Plinko(350,110,15)
	plinkos2H =new Plinko(400,110,15) 
	plinkoS2I =new Plinko(450,110,15)

	//plinko fourth level

	plinkos3A=new Plinko(70,300,15)
	plinkos3B=new Plinko(120,300,15)
	plinkos3C=new Plinko(170,300,15)
	plinkos3D=new Plinko(220,300,15)
	plinkos3E=new Plinko(270,300,15)
	plinkos3F=new Plinko(320,300,15)
	plinkos3G=new Plinko(370,300,15)
	plinkos3H =new Plinko(420,300,15) 
	
	
	//particles
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  if(frameCount%60===0){
	particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
	particles.display();
  }



  
  ground.display();
  ground2.display();
  ground3.display();

  
 
 division1.display();
 division2.display();
 division3.display();
 division4.display();
 plinkos.display();
 plinkos1.display();
 plinkos2.display();
 plinkos3.display();
 plinkos4.display();
 plinkos5.display();
 plinkos6.display();
 plinkos7.display();
 plinkos8.display();
 plinkos9.display();
 plinkosA.display();
 plinkosB.display();
 plinkosC.display();
 plinkosD.display();
 plinkosE.display();
 plinkosF.display();
 plinkosG.display();
 plinkosH.display();
 plinkos2A.display();
 plinkos2B.display();
 plinkos2C.display();
 plinkos2D.display();
 plinkos2E.display();
 plinkos2F.display();
 plinkos2G.display();
 plinkos2H.display();
 plinkoS2I.display();
 plinkos3A.display();
 plinkos3B.display();
 plinkos3C.display();
 plinkos3D.display();
 plinkos3E.display();
 plinkos3F.display();
 plinkos3G.display();
 plinkos3H.display();
 particles.display();
 
}




