class Particles {
    constructor(x,y,r) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.1,
          'density':1.2
      }
      this.x=x;
      this.y=y;
      this.r=r
      this.body=Bodies.circle(this.x, this.y, this.r/2, options)
      this.color=color(random(0,225),random(0,225),random(0,225))
      
      World.add(world, this.body);
    }
    display(){
      var particlepos= this.body.position;
      
      push();
      translate(particlepos.x, particlepos.y);
      rectMode(CENTER)
     
      
      fill(this.color);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  