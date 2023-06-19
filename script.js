$(document).ready(function() {



    //normal button
    $(".normalButton").on("click", function() {
        $(".image").animate({
            height: '350px'
        });
    });
    // grow button
    $(".growButton").on("click", function() {
        $(".image").animate({
            height: '500px'
        });
    });
     // shrink button
    $(".shrinkButton").on("click", function() {
        $(".image").animate({
            height: '200px'
        });
    });

  
 

        // Visibility Button
        $(".visButton").on("click", function() {
            $(".image").animate({
                opacity: '1'
            });
        });
        // Invisible Button
        $(".invisButton").on("click", function() {
            $(".image").animate({
                opacity: '0.05'
            });
        });

        /* Move Buttons*/
        
        // 1 . Up Button

        $(".upButton").on("click", function() {
            $(".image").animate({
                top: "-=230px"
            }, "normal");
        }); 
        
        // 2 . Right Button
        $(".rightButton").on("click", function() {
            $(".image").animate({
                left: "+=230px"
            }, "normal");
        });

        // 3 . Down Button
        $(".downButton").on("click", function() {
            $(".image").animate({
                top: "+=230px"
            }, "normal");
        });

        // 4. Left Button
        $(".leftButton").on("click", function() {
            $(".image").animate({
                left: "-=230px"
            }, "normal");
        });
        
      

        // 5. Go back  Button
        $(".backButton").on("click", function() {
            $(".image").animate({
                top: "55px",
                left: "85px"
            }, "fast");
        });



    });
