class link{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:200,
            stiffness:0.04
        }
    this.link  = Constraint.create(options)
    World.add (world,this.link)        
    }
    
    display(){
        line(this.link.bodyA.position.x,this.link.bodyA.position.y,this.link.bodyB.position.x,this.link.bodyB.position.y)    
    }
}