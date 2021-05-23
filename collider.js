class collider {
    constructor(x,y,scale){
       this.collider=createSprite(x,y);
       this.collider.addImage(colliderImg)
        this.collider.scale=scale;
      
       

    }

display(){
   
    player.collide(this.collider);

    if(health.width<10){
        this.collider.destroy();
    }
       
    cgroup.add(this.collider);

}
}