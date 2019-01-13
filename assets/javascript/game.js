

$(document).ready(function(){

    var wins = 0;
    var losses = 0;
    var targetNumber = 0;
    var clickValue = 0;
    var images = document.querySelectorAll("img");

    startGame(); // invoke game on page load

   
  
//-----------------------------------------------------------------------------------
    function generateTargetNumber() {

        var min = 19;
        var max = 120;
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        $("#number-to-guess").text(randomNumber); //update the screen
        return randomNumber; 
    };   
//----------------------------------------------------------------------------------- 
    function generateClickValues() {

        var randomNumber = Math.floor((Math.random() * 12) + 1);
        return randomNumber; 
    };  
    
//-----------------------------------------------------------------------------------
    function startGame() {

        //console.log("resetGame() was invoked");
        $("#your-total-score").attr("style","color:red;");
        $("#your-total-score").text("0"); 
        clickValue = 0;
        targetNumber = generateTargetNumber(); 
        //console.log("reset game was invoked... targetNumber = " + targetNumber);
        
        for (var i = 0; i < images.length; i++) {
            images[i].setAttribute("points",generateClickValues());        
            //console.log("reset game was invoked... images[i].attributes.points.value = ", images[i].attributes.points.value);
        };
    };
//-----------------------------------------------------------------------------------


//this stuff happens with every click...
    $(".crystal-image").on("click", function(event) { 

          //console.log("event.target.attributes.points.value = ", event.target.attributes.points.value);
        var imgPoints = parseInt(event.target.attributes.points.value);
        clickValue = clickValue + imgPoints; 
        //console.log("incremented clickValue = " + clickValue);
  
        $("#your-total-score").text(clickValue);        

        if(clickValue === targetNumber) {
            $("#your-total-score").attr("style","color:green;");
            $("#your-total-score").text(clickValue + " You Won!");
            wins = wins + 1; 
            $("#your-wins").text(wins); 
            $("#crystals").css({"display":"none"});
            $("#continue").css({"display":"block"});

                $("#continue").click(function() {
                //alert( "Handler for .click() called." );
                $("#crystals").css({"display":"block"});
                $("#continue").css({"display":"none"});
                startGame();
            });
            //startGame();
          
        } else if (clickValue > targetNumber) {  
            //$("#your-total-score").attr("style","color:blue;");
            $("#your-total-score").text(clickValue + " You Lost!");
            losses = losses + 1; 
            $("#your-losses").text(losses);
            $("#crystals").css({"display":"none"});
            $("#continue").css({"display":"block"});

                $("#continue").click(function() {
                //alert( "Handler for .click() called." );
                $("#crystals").css({"display":"block"});
                $("#continue").css({"display":"none"});
                startGame();
            });
            //startGame();
        };
        
    });

});