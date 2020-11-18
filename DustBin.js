class DustBin{
    constructor(x,y,width,hieght){
        var options = {
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,width,hieght,options);
        this.width=width;
        this.hieght=hieght;
        World.add(world,this.body);
    }
    display(){
        fill("green");
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.hieght);
    }
}