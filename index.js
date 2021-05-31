for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

var buttonInnerHTML=this.innerHTML;

   makeS(buttonInnerHTML);

   butonAnimation(buttonInnerHTML);

});

}

// detects keyboard
document.addEventListener("keydown",function(event){

makeS(event.key);

butonAnimation(event.key);

});

function makeS(key){
    switch(key){
        case "w":
        var t1=new Audio("sounds/tom-1.mp3");
        t1.play();
        break;
 
 
        case "a":
         var t2=new Audio("sounds/tom-2.mp3");
         t2.play();
         break;
 
         case "s":
        var t3=new Audio("sounds/tom-3.mp3");
        t3.play();
        break;
 
        case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
 
        case "j":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
 
        case "k":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
 
        case "l":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
 
        default:
            console.log(buttonInnerHTML);
    }
}

function butonAnimation(currentkey){

    var active =   document.querySelector("."+currentkey)

    active.classList.add("pressed");

    setTimeout(function (params) {
        
        active.classList.remove("pressed");
    }, 150)
}