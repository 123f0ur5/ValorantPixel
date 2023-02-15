let clicks = 0;
const add = $(".add");
let target;
let position;

var agent_dict = {
    "Viper" : {"color" : "green", "icon" : "Viper_icon", "skill" : "Snakebite"},
    "Sova" : {"color" : "blue", "icon" : "Sova_icon", "skill" : "Reconbolt"},
    "KAYO" : {"color" : "purple", "icon" : "KAYO_icon", "skill" : "ZEROpoint"},
    "Brimstone" : {"color" : "orange", "icon" : "Brimstone_icon", "skill" : "Incendiary"},
    "Killjoy" : {"color" : "yellow", "icon" : "Killjoy_icon", "skill" : "Nanoswarm"},
    "Cypher" : {"color" : "brown", "icon" : "Cypher_icon", "skill" : "Cybercage"},
    "Fade" : {"color" : "red", "icon" : "Fade_icon", "skill" : "Haunt"},
}

function pixel_Format(mode, color, icon){
    return `<img id="add-${mode}" class="pixel ${color}" src="../icons/${icon}.png"></img>`
}

add.on("click", function(){
    pixelMap.empty();
    $(".arrow").addClass("inactive")
    if(add.hasClass("yellow")){
        add.removeClass("yellow");
        currentMap.off("click");
        clicks = 0;
        $(".arrow").removeClass("inactive")
        return insertPixels();
    } else {
        add.addClass("yellow");
    }
    currentMap.on("click", function(e){
        if (clicks == 0){
            target = [e.clientY-12.5, e.clientX-12.5]; //the marker size is 25px, 12.5 is to put the marker in the middle
            clicks++;
            pixelMap.append(pixel_Format("target", agent_dict[agent]["color"], agent_dict[agent]["skill"])) //put the marker on the map
            $("#add-target").css({"top" : `${target[0]}px`, "left" : `${target[1]}px`, "position" : "absolute"}) //define css of marker
        } else if( clicks == 1) {
            position = [e.clientY-12.5, e.clientX-12.5];
            clicks = 0;
            add.removeClass("yellow");
            currentMap.off("click");
            pixelMap.append(pixel_Format("location", agent_dict[agent]["color"], agent_dict[agent]["icon"]))
            $("#add-location").css({"top" : `${position[0]}px`, "left" : `${position[1]}px`, "position" : "absolute"})
            setTimeout(() => {
                return register()
            }, 1000);
        }  
    })
});

function register(){
    if(confirm("Do you want to save this lineup?")){
        let newPixel = "Pixel" + (pixelCount+1)
        let dict = {[newPixel] : [target, position]} //Data from the new pixel
        $.getJSON(pixelPath, function(data){
            let pixelData = JSON.parse(JSON.stringify(data)) //get data from json file and transform in a dict
            data = pixelData[agent_dict[agent]["skill"]]["map"][map] //get pixel data from selected map
            let newData = $.extend(dict, data) //Put together new pixel with older pixels
            pixelData[agent_dict[agent]["skill"]]["map"][map] = newData //Add this data into the dict, with the nem pixel
            window.indexBridge.saveData(agent, pixelData);
        });
    }
    setTimeout(() => {
        $(".arrow").removeClass("inactive")
        pixelMap.empty()
        insertPixels();
    }, 1000);
}