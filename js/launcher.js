class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB, 
            stiffness: 0.01,
            length: 3
        }
        this.pointB = pointB
        this.chain = Constraint.create(options); 
        World.add(world,this.chain); 

    }

    fly(){
        this.chain.bodyA=null; 
    }

    attach(body){ 
        this.chain.bodyA = body; 
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position; 
            var pointB = this.pointB; 
            push(); 
            strokeWeight(2); 
            line (pointA.x, pointA.y, pointB.x, pointB.y);
            pop();   
        }
    }

}