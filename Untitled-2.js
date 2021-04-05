canvas = document.getElementById("my Canvas");
ctx = canvas.getContext("2d");

car1_width=120;
car1_height=70;
background_image = "https://i.postimg.cc/KzWwHPcq/racing.gif";
car1_image="car1.png";
car1_x=10;
car1_height=10;

 function add(){
     background_imgtag = new Image();
     background_imgtag.onload=uploadBackground;
     background_imgtag.src= background_image; 

     car1_imgtag = new Image();
     car1_imgtag.onload=uploadcar1;
     car1_imgtag.src=car1_image;

     
 }
 function uploadBackground(){
     ctx.drawImage(background_imgtag,0,0,canvas.width,canvas,canvas_height);
 }
  function uploadcar1(){
      ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1.height)
     }
     window.addEventListener("keydown",my_keydown);

     function my_keydown(e)
     {
         keyPressed= e.keyCode;
         console.log(keypressed);
         if(keyPressed =='38'){
             up();
             console.log("up")
         }
         if(keyPressed =='40'){
            down();
            console.log("down")
        }
        if(keyPressed =='37'){
            left();
            console.log("left")
        }
        if(keyPressed =='39'){
            right();
            console.log("right")
        }
     }