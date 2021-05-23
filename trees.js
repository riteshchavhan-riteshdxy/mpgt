class Tree {
    constructor(x,y,scale){
       this.collider=createSprite(x,y);
       this.collider.addImage(treeImg)
        this.collider.scale=scale;
      
       

    }

display(){
   
    if(health.width<10){
    
        this.collider.destroy();
    } 

   

  

}
}


