const fs = require('fs');

async function main() {
    sliceFile();
}

async function sliceFile() {
    const keys = require('./land.json')
    let arr = keys.keys;
    for (let i = 0; i < arr.length; i++) {
        //写入指定文件夹
        let element = arr[i];
        //转成string
        let str = JSON.stringify(element);
        //打印 str
        console.log(str);
        // fs.writeFile(i + '.json', str, function (err) {
        //     if (err) {
        //         console.log(i, err);
        //     } else {
        //         console.log(i, '写入成功');
        //     }
        // });
    }
}

function sleep(n) {
    var start = new Date().getTime();
    while (true) {
        if (new Date().getTime() - start > n) {
            // 使用  break  实现；
            break;
        }
    }
}

main();
