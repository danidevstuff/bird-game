class Log {
    constructor(x, y,  h, angle) {
       var options= {
           'restitution':0.4,
           'friction':1,
            'density':1
       }

        this.body = Bodies.rectangle(x, y, 20, h,options);
        World.add( world, this.body);
        this.width = 20;
        this.height = h;
        Matter.Body.setAngle(this.body, angle);
    }

    display() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill (255);
        rect(0,0,this.width,this.height);
        pop();
    }



}