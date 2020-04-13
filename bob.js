class bob{
    constructor(x,y,width,height){
    var options = {
           isStatic :true
    }
    this.body = Bodies.circle(x,y,50,50);

    World.add(world,this.body); 
    }
    display(){
  var pos = this.body.position;
       
    ellipseMode(CENTER);
    fill("gold")
    //fillStroe("orange")
    ellipse(pos.x,pos.y,50,50);
    
    
    }
    } 