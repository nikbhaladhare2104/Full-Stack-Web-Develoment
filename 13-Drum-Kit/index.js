// For the button click

for (i = 0; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var ButtonClicked = this.innerHTML;
    qsound(ButtonClicked);
    animation(ButtonClicked);
    });

}


// For the keystrokes 

document.addEventListener("keydown", function(Event){
    qsound(Event.key);
    animation(Event.key);
});



// functions here 

function animation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+key).classList.remove("pressed")}, 100);
}

function qsound(key) {

        switch (key) {
            case "w":
                var w = new Audio("sounds/tom-1.mp3");
                w.play();
                break;
            
            case "a":
                var a = new Audio("sounds/tom-2.mp3");
                a.play();
                break;

            case "s":
                var s = new Audio("sounds/tom-3.mp3");
                s.play();
                break;

            case "d":
                var d = new Audio("sounds/tom-4.mp3");
                d.play();
                break;

            case "j":
                var j = new Audio("sounds/snare.mp3");
                j.play();
                break;
                
            case "k":
                var k = new Audio("sounds/crash.mp3");
                k.play();
                break;

            case "l":
                var l = new Audio("sounds/kick-bass.mp3");
                l.play();
                break;
        
            default: console.log(key);
        }
}


