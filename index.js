for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",
function ()
{
   var buttonClickedName=this.innerHTML;
   makeSound(buttonClickedName);
   animation(buttonClickedName);
}
);
}

//Detcting keyboard press...it is applied to whole document unlike button press not only on
//selected selctor
document.addEventListener("keypress",
function(e)//we have to pass - "event" (but it is a varaible only which receives an event you can give any name its not fixed like a,b etc)which means to get whatever event (i.e key on keyboard that we pressed).
{
   makeSound(e.key);//for extracting key means apphabet as keycodes ,keylocation there are many more things.
   animation(e.key);            
}
);




function makeSound(nameOfButton)
{
   switch(nameOfButton)
   {
      case "w":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();

         break;

      case "s":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;

      case "d":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;

      case "a":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;  

      case "j":
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         
         break;
      case "k":
         var snare= new Audio("sounds/snare.mp3");
         snare.play();
         
         break;
         
         case "l":
         var crash= new Audio("sounds/crash.mp3");
         crash.play();
         break;

         default:
            console.log(nameOfButton);
   } 
   }

   //for animation
   function animation(currentKey)
   {
      var activeElement=document.querySelector("."+currentKey);
      activeElement.classList.add("pressed");
      setTimeout(function(){
         activeElement.classList.remove("pressed");
      },100);
   }

