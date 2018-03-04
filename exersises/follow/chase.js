var fish = document.getElementById("fish");
		document.addEventListener("mousemove", getMouse); 


		fish.style.position = "absolute"; //css		
		var fishpos = {x:0, y:0};

		setInterval(followMouse, 50);
		
		var mouse = {x:0, y:0}; //mouse.x, mouse.y
		
		var dir = "right";
		function getMouse(e){
			mouse.x = e.pageX;
			mouse.y = e.pageY;
        //Checking directional change
        if(mouse.x > fishpos.x){
          dir = "right";
        } else {
          dir = "left";
        }
		}
		
		function followMouse(){
			//1. find distance X , distance Y
			var distX = mouse.x - fishpos.x;
			var distY = mouse.y - fishpos.y;
			//Easing motion
       //Progressive reduction of distance 
			fishpos.x += distX/5;
			fishpos.y += distY/2;
			
			fish.style.left = fishpos.x + "px";
			fish.style.top = fishpos.y + "px";
      
      
        //Apply css class 
        if (dir == "right"){
          fish.setAttribute("class", "right");
        } else {
          fish.setAttribute("class", "left");        
        }
			
		}