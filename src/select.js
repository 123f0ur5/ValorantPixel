const agents = $(".agents-box");
const maps = $(".maps-box");
const menu = $(".menu");
let count = 0;
var currentMap = $(".current-map")
var map = "";
var agent = "";

//Select character
$(".agent").on("click", function(){
    agent = $(this).children("img").attr("alt");
    $(this).addClass("active");
    agents.fadeOut("slow");
    menu.delay("1000").fadeIn("slow");
    maps.delay("1000").fadeIn("slow");
    count += 1;
});

//Select map
$(".map").on("click", function(){
    map = $(this).children("img").attr("alt");
    $(this).addClass("active-map");
    maps.fadeOut("slow");
    //sides.delay("1000").fadeIn("slow");
    currentMap.append('<img id="current" src="../maps/' + map + '_minimap.png" width="750" height="475"/>');
    add.fadeIn("1000");
    currentMap.delay("1000").fadeIn("1000");
    setTimeout(() => {
        insertPixels()
    }, 1000);
    count += 1;
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
        menu.fadeOut("slow");
        maps.fadeOut("slow");
        agents.delay("1000").fadeIn("slow");
        count -= 1;
    } else if (count == 2){
        //sides.fadeOut("slow");
        currentMap.fadeOut("slow");
        currentMap.empty();
        pixelMap.empty();
        add.fadeOut("1000");
        maps.delay("1000").fadeIn("slow");
        count -= 1;
    }
});