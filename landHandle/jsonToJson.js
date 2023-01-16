const fs = require('fs');
const {getNewJson,getNewJson2}  = require("../utils/utils");
const {outLandPath,landFileName,csvPath,csvPathname,outSinglePath}  = require("../utils/constants");
async function ReadJsonAndWriteFile() {
    const keys = require(outLandPath+ landFileName);
    let arr = keys;
    //console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        //写入指定文件夹
        let element = getNewJson2(arr[i]);
        //转成string
        let str = JSON.stringify(element);
        //打印 str
        console.log(str);
        let newi = i+1;
        fs.writeFile(outSinglePath +newi+ '.json', str, function (err) {
            if (err) {
                console.log(i, err);
            } else {
                console.log(i, '写入成功');
            }
        });
    }
}

//"42,30"
async function main() {
    ReadJsonAndWriteFile();
}

main();
