var characters = $(".characters-box");
var maps = $(".maps-box");
var sides = $(".sides-box");
var arrow = $(".arrow");
var count = 0;
var map = "";
var active_map = $(".active-map")
var character = "";

//Select character
$(".character").on("click", function(){
    if ($(".character").hasClass("active")){
        $(".character").removeClass("active");
    }
    character = $(this).children("img").attr("alt");
    $(this).addClass("active");
    characters.fadeOut("slow");
    $(".arrow").delay("1000").fadeIn("slow");
    maps.delay("1000").fadeIn("slow");
    
    count += 1;
});

//Select map
$(".map").on("click", function(){
    console.log("entrei")
    if ($(".map").hasClass("active-map")){
        $(".map").removeClass("active-map");
    }
    map = $(this).children("img").attr("alt");
    $(this).addClass("active-map");

    maps.fadeOut("slow");
    //sides.delay("1000").fadeIn("slow");
    active_map.append('<img id="current" src="../maps/' + map + '_minimap.png" width="750" height="475"/>');
    active_map.delay("1000").fadeIn("1000")
    count += 1;
});

$(".active-map").on("click", function(e){
    console.log(e.pageX-12.5, e.pageY-12.5)
});

$("#test").on("mouseenter mouseleave", function(e){
    if(e.type == "mouseenter"){
        console.log("entrei")
        $(this).animate({width: '+=5px', height: '+=5px'})
        $(this).delay(300).animate({width: '-=5px', height: '-=5px'})
    } else if (e.type == "mouseleave"){
        console.log("sai")
        $(this).stop("",true).fadeIn(0);
    }
});

//Select side
/*$(".side").on("click", function(){
    if ($(".side").hasClass("selected")){
        ($(".side").removeClass("selected"));
    }
    $(this).addClass("selected");
});*/

//Go back in selection menu
$(".arrow").on("click", function(){
    if (count == 1){
        arrow.fadeOut("slow");
        maps.fadeOut("slow");
        characters.delay("1000").fadeIn("slow");
        count -= 1;
    } else if (count == 2){
        //sides.fadeOut("slow");
        active_map.fadeOut("slow")
        active_map.empty()
        maps.delay("1000").fadeIn("slow");
        count -= 1;
    }
});