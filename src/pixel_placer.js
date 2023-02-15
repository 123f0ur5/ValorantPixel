var pixelMap = $(".pixel-map")
var pixelCount;
var pixelPath;

function insert_Format(index, color, icon, skill){
    return `<div class="pixel-box">\n\
                <div id="${index}-target" name="${index}" class="flexabsolute">\n\
                    <img class="pixel" src="../icons/${skill}.png">\
                    <span class="${color}"></span>\
                </div>
                <div id="${index}-location" name="${index}" class="flexabsolute">\
                    <img class="pixel" src="../icons/${icon}.png">\
                    <span class="${color}"></span>\
                </div>\
            </div>`
}

function insertPixels(){
    var video_dict = {};
    pixelPath = `../pixel/${agent}.json`;
    pixelCount = 0;
    $.getJSON(pixelPath, function(data){
        let pixelData = JSON.parse(JSON.stringify(data));
        pixelData = pixelData[agent_dict[agent]["skill"]]["map"][map]; //get the pixels for the map from json file      y   x      y   x
        $.each(pixelData, function(index, value){ //index is the key of the dict and value is pixels in this format [[123,123], [123,123], video_url], first is target and the second is the location
            video_dict[index] = value[2]; //Put the video link inside the dict
            let html = insert_Format(index, agent_dict[agent]["color"], agent_dict[agent]["icon"], agent_dict[agent]["skill"]);
            pixelMap.append(html);
            $(`#${index}-target`).css({"top" : `${value[0][0]}px`, "left" : `${value[0][1]}px`});
            $(`#${index}-location`).css({"top" : `${value[1][0]}px`, "left" : `${value[1][1]}px`});
            pixelCount++;
        });

        let pixelSelect = $(".pixel-box").children()
        let videoPlayer = $(".video-player")
        pixelSelect.on("click", function(){
            let pixelName = $(this).attr("name")
            videoPlayer.append(`<video width="350" height="250" src="${video_dict[pixelName]}" controls></video>`)
            videoPlayer.css({"display" : "flex"})
            videoPlayer.fadeIn(1000)
            console.log(pixelName)
            console.log(video_dict[pixelName])
        });
    });
}