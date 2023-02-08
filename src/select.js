var agent = $(".characters-body");
var map = $(".maps-body");
var arrow = $(".arrow-characters");
var count = 0;

$(".character").on("click", function(){
    if ($(".character").hasClass("active")){
        $(".character").removeClass("active");
    }
    $(this).addClass("active");

    agent.detach();
    $(".arrow").removeClass("inactive");
    count += 1;
});

$(".map").on("click", function(){
    if ($(".map").hasClass("active-map")){
        $(".map").removeClass("active-map");
    }
    $(this).addClass("active-map");

    map.detach();
    $(".arrow").removeClass("inactive");
    count += 1;
});

$(".arrow").on("click", function(){
    if (count == 1){
        $(".characters-box").append(agent);
        $(".arrow").addClass("inactive");
        count -= 1;
    } else if (count == 2){
        $(".maps-box").append(map);
        count -= 1;
    }
});