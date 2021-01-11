class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic:true,
          'restitution':0.3,
          'friction':0.1,
          'density':1.2
      }
      this.x=x;
      this.y=y;
      this.r=r
      this.body=Bodies.circle(this.x, this.y, this.r/2, options)
      
      World.add(world, this.body);
    }
    display(){
      var plinkopos= this.body.position;
      
      push();
      translate(plinkopos.x, plinkopos.y);
      rectMode(CENTER)
     
     
      
      fill("white");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  