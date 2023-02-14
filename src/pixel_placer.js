var pixelMap = $(".pixel-map")
var pixelCount;
var pixelPath;

function insert_Format(index, color, icon, skill){
    return `<div class="pixel-box">\n\
                <div id="${index}-target" class="flexabsolute">\n\
                    <img class="pixel" src="../icons/${skill}.png">\
                    <span class="${color}"></span>\
                </div>
                <div id="${index}-location" class="flexabsolute">\
                    <img class="pixel" src="../icons/${icon}.png">\
                    <span class="${color}"></span>\
                </div>\
            </div>`
}

function insertPixels(){
    pixelPath = `../pixel/${agent}.json`;
    console.log(pixelPath)
    pixelCount = 0;
    $.getJSON(pixelPath, function(data){
        let pixelData = JSON.parse(JSON.stringify(data))
        pixelData = pixelData[agent_dict[agent]["skill"]]["map"][map] //get the pixels for the map from json file      y   x      y   x
        $.each(pixelData, function(index, value){ //index is the key of the dict and value is pixels in this format [[123,123], [123,123]], first is target and the second is the location
            let html = insert_Format(index, agent_dict[agent]["color"], agent_dict[agent]["icon"], agent_dict[agent]["skill"]);
            pixelMap.append(html);
            $(`#${index}-target`).css({"top" : `${value[0][0]}px`, "left" : `${value[0][1]}px`});
            $(`#${index}-location`).css({"top" : `${value[1][0]}px`, "left" : `${value[1][1]}px`});
            pixelCount++;
        });
    });
}