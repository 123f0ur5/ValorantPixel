var characters = $(".characters-box");
var maps = $(".maps-box");
var arrow = $(".arrow");
var count = 0;
var map = "";
var currentMap = $(".current-map")

//Select character
$(".character").on("click", function(){
    if ($(".character").hasClass("active")){
        $(".character").removeClass("active");
    }
    $(this).addClass("active");
    characters.fadeOut("slow");
    $(".arrow").delay("1000").fadeIn("slow");
    maps.delay("1000").fadeIn("slow");
    
    count += 1;
});

//Select map
$(".map").on("click", function(){
    if ($(".map").hasClass("active-map")){
        $(".map").removeClass("active-map");
    }
    map = $(this).children("img").attr("alt");
    $(this).addClass("active-map");

    maps.fadeOut("slow");
    //sides.delay("1000").fadeIn("slow");
    currentMap.append('<img id="current" src="../maps/' + map + '_minimap.png" width="750" height="475"/>');
    currentMap.delay("1000").fadeIn("1000")
    count += 1;
});

currentMap.on("click", function(e){
    console.log(e.pageX-12.5, e.pageY-12.5)
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
        currentMap.fadeOut("slow")
        currentMap.empty()
        maps.delay("1000").fadeIn("slow");
        count -= 1;
    }
});