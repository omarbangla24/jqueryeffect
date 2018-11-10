
$(document).ready(function(){
        $(".arrow").click(function () {
                $(".social-box").toggle(500)
        });


    $(".arrow").click(function () {
        $(".a-l-icon").toggle();
            $(".a-r-icon").toggle()
    });

            // Item Start

    $("h1").click(function(){
        $("#breakfast").slideToggle();
        $("#dinner").hide();
        $("#lunch").hide();
    });

    $("h2").click(function(){
        $("#lunch").slideToggle();
        $("#breakfast").hide();
        $("#dinner").hide();
    });

    $("h3").click(function(){
        $("#dinner").slideToggle();
        $("#breakfast").hide();
        $("#lunch").hide();
    });

});










































