var clicks = 0;
var target;
var position;

add.on("click", function(){
    pixelMap.empty();
    if(add.hasClass("yellow")){
        add.removeClass("yellow");
        currentMap.off("click");
        return;
    } else {
        add.addClass("yellow");
    }
    currentMap.on("click", function(e){
        if (clicks == 0){
            target = [e.clientX-12.5, e.clientY-12.5];
            clicks++;
            pixelMap.append('<img id="add-target" class="pixel" src="../icons/Snake_Bite.png"></img>')
            $("#add-target").css({"top" : `${e.clientY-12.5}px`, "left" : `${e.clientX-12.5}px`, "position" : "absolute"})
        } else if( clicks == 1) {
            position = [e.clientX-12.5, e.clientY-12.5];
            clicks = 0;
            add.removeClass("yellow");
            currentMap.off("click");
            pixelMap.append('<img id="add-location" class="pixel" src="../icons/Viper_icon.png"></img>')
            $("#add-location").css({"top" : `${e.clientY-12.5}px`, "left" : `${e.clientX-12.5}px`, "position" : "absolute"})
            setTimeout(() => {
                return register()
            }, 1000);
        }  
        console.log(agent, pixelPath, position)
        })
});

register = function(){
    if(confirm("Do you want to save this lineup?")){
        var newPixel = "Pixel" + (pixelCount+1)
        var dict = {[newPixel] : [target, position]}
        $.getJSON(pixelPath, function(data){
            var newData = $.extend(dict, data)
            console.log(newData)
        });
    }

    insertPixels();
}