var map = $(".active-map");
var agent = "";
var pixelMap = $(".pixel-map")


$(".character").on("click", function(){
    agent = $(this).children("img").attr("alt");
});

currentMap.on("DOMNodeInserted", function(){
    console.log("inserted");
    var pixelPath = `../pixel/${agent}-${map}-Snakebite.json`;
    $.getJSON(pixelPath, function(data){
        $.each(data, function(index, value){
            html = `<div class="pixel-box">\n\
                        <div id="${index}-target" class="flexabsolute">\n\
                        <img class="pixel" src="../icons/Snake_Bite.png">\
                        <span class="green"></span>\
                    </div>
                    <div id="${index}-location" class="flexabsolute">\
                        <img class="pixel" src="../icons/Viper_icon.png">\
                        <span class="green"></span>\
                    </div>`
            pixelMap.append(html);
            $(`#${index}-target`).css({"top" : `${value[0][0]}px`, "left" : `${value[0][1]}px`});
            $(`#${index}-location`).css({"top" : `${value[1][0]}px`, "left" : `${value[1][1]}px`});
        });
    });
});

currentMap.on("DOMNodeRemoved ", function(){
    console.log("tirei");
    pixelMap.empty();
});