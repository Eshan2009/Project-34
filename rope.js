class rope{
    constructor(body1,pointB){
        var options = {
            bodyA : body1,
            pointB : pointB,
            stiffness : 0.05,
            length : 300
    
        }
        this.pointB = pointB
        this.rope = Matter.Constraint.create(options);
        
        World.add(world, this.rope)
    
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}