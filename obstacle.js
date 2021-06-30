class Obstacle{
    constructor(x,y,w,h){
        var options={
            restitution:0.4,
            isStatic:true
        }
       
      
       this.body = Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.body);
       this.h=h;
       this.w=w
       this.image=loadImage("images/rock.png")
      


    }
    display(){
        var pos = this.body.position;
        fill("red");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.h,this.w);
       
        
       

    }

   

}

