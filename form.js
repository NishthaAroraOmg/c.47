class Form{
 
 
    constructor(){
     this.input=createInput("Name");
     this.button=createButton("Play");
     this.greeting=createElement("Hi!");
    }

    hide(){
     this.input.hide();
     this.button.hide();
     this.greeting.hide();
    }

    display(){
     var title =createElement("HI!");
     title.html("Environment Go!");
     title.position(displayWidth/2,displayHeight/2);
     this.input.position(180,180);
     this.button.position(200,200);
     
        this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();
        });
     


    }

    



}