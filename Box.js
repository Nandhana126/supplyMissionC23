class Box{
constructor(x,y,w,h){
    this.ball = Bodies.rectangle(x,y,w,h,{isStatic:true});
    World.add(world,this.ball)
    this.width=w
    this.height=h
}
display(){
    var pos=this.ball.position
    var angle=this.ball.angle
    push ()
    fill ("red");
    translate(pos.x,pos.y)
    rotate (angle)
    console.log(this.ball.angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop ()


}

}