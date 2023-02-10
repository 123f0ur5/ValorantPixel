var map = $(".active-map");
var agent = ""

$(".character").on("click", function(){
    agent = $(this).children("img").attr("alt");
})

currentMap.on("DOMNodeInserted ", function(){
    console.log("coloquei")
});

currentMap.on("DOMNodeRemoved ", function(){
    console.log("tirei")
});