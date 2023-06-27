

for (let i=0; i<document.querySelectorAll(".drum").length ;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", drums);

    function drums(){
 
       if (i<4){
            let audio = new Audio('sounds/tom-' + (i+1) + '.mp3');
            audio.play();
        } else if (i===4) {
            let audio = new Audio('sounds/snare.mp3');
            audio.play();
        } else if (i===5){
            let audio = new Audio('sounds/crash.mp3');
            audio.play();
        }else if (i===6){
            let audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        }
        
    }

}


