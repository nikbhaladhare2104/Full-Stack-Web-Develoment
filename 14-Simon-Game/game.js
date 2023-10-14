var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

$(document).keypress(function(){
    if (!started) {
        $("#level-title").text("Level "+0);
        nextSequence();
        started = true;
    }
});




$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    // console.log(userClickedPattern);

});

function startOver() {
    level = 0;
    gamePattern = [];
 }

function nextSequence(){
    userClickedPattern = [];
    level+=1;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    // level +=1;
    // $("#level-title").text("Level "+level);
    // console.log(gamePattern);
}

function playSound(name){
    var audioFile = new Audio("sounds/" + name + ".mp3"); 
    audioFile.play();
}

function animatePress(currentColour) {
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed")
    },
    100)
}


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) { 
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
            nextSequence();
            }, 1000);
        }

    } else {
        playSound("wrong");
         $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart.");
        },
        1000);
        startOver();
        started=false;
    }

}

