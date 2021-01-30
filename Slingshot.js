class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image = loadImage("sprites/sling1.png");
        this.image1 = loadImage("sprites/sling2.png");
        this.image2 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image( this.image, 200,50 )
           image(this.image1, 175,50)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(84,39,15)
            
            if(pointA.x<200){
                  strokeWeight(10);
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y+37);
            line(pointA.x-25, pointA.y, pointB.x+37, pointB.y+37);
            image(this.image2, pointA.x-30,pointA.y-10, 15, 30)
            }
            else{
                strokeWeight(4);
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y+37);
                line(pointA.x-25, pointA.y, pointB.x+37, pointB.y+37);
                image(this.image2, pointA.x-30,pointA.y-10, 15, 30)
            }
            pop();
          
            
        }
        
    }
    
}