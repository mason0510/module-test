const csvFilePath = "./data.csv"
const csv=require('csvtojson');
let fs = require('fs');
const {outLandPath,landFileName,csvPath,csvPathname}  = require("../utils/constants");


csv()
    .fromFile(csvPath+csvPathname)
    .then((jsonObj)=>{
        jsonObj = JSON.stringify(jsonObj)
        fs.writeFile(outLandPath+landFileName,jsonObj,'utf-8', function(err) {
            console.log(outLandPath+landFileName)
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    })
