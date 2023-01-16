const{baseUrl} = require("./constants.js");
//简单的blocks
function getNewJson(currentJson) {
    console.log(currentJson.id);
    console.log(currentJson.blocks);
    let arr = currentJson.blocks.split(",");
    let x = arr[0];
    let y = arr[1];
    let newJson = {
        "id": currentJson.id,
        "name": "Land " + x + "," + y,
        "description": "",
        "image": baseUrl + currentJson.id + ".jpg",
        "external_url": "",
        "attributes": [
            {
                "trait_type": "X",
                "value": x,
                "display_type": "number"
            },
            {
                "trait_type": "Y",
                "value": y,
                "display_type": "number"
            }
        ],
    }
    console.log(newJson);
    return newJson;
}

//复杂的blocks
function getNewJson2(currentJson) {
    console.log(currentJson.id);
    console.log(currentJson.blocks);
    let arr = currentJson.blocks.split("|");
    let mydata = arr[0];
    let arr1 = mydata.split(",");
    let x = arr1[0];
    let y = arr1[1];
    //打印x y
    console.log(x);
    console.log(y);
    let newJson = {
        "id": currentJson.id,
        "name": "Land " + x + "," + y,
        "description": "",
        "image": "http://101.71.63.249/static/land/images/" + currentJson.id + ".jpg",
        "external_url": "",
        "attributes": [
            {
                "trait_type": "X",
                "value": x,
                "display_type": "number"
            },
            {
                "trait_type": "Y",
                "value": y,
                "display_type": "number"
            }
        ],
    }
    console.log(newJson);
    return newJson;
}
//导出模块
module.exports = {
    getNewJson,
    getNewJson2
}
