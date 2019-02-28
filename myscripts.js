$(document).ready(function() {
    $("#content-body").hover(function(){
        $("#lol").attr("src", "GitHub-Mark-Light-64px.png");
    },
    function() {
        $("#lol").attr("src", "GitHub-Mark-64px.png");
    });

    $("#content-body").click(() => {
        $("#content-body").fadeOut();
        $("#content-body").css("display", "none");

        setTimeout(function(){
            $("#waiting").css("visibility", "visible"); 
            setTimeout(function() {
                $("#img1").css("visibility", "visible"); 
                setTimeout(function(){
                    $("#img2").css("visibility", "visible"); 
                    setTimeout(function(){
                        $("#img3").css("visibility", "visible"); 
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);



        setTimeout(function(){
            $("#waiting").css("display", "none"); 
            $("#img1").css("display", "none"); 
            $("#img2").css("display", "none"); 
            $("#img3").css("display", "none"); 

            $("body").css("background-color", "#fff");
            $("#hidden-content-body").fadeIn(3000); 
        }, 5000);


        


    })
})
