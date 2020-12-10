class Bird {
    constructor(x, y) {
       var options= {
           'restitution':0.4,
           'friction':0.6,
            'density':1
       }

        this.body = Bodies.rectangle(x, y, 50, 50,options);
        World.add( world, this.body);
        this.width = 50;
        this.height = 50;
    }

    display() {
        let pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY
        let angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill ("red");
        rect(0,0,this.width,this.height);
        pop();
    }



}