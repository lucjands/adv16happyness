var fs = require("fs");
var Converter = require("csvtojson").Converter;
var _ = require("lodash");
var json2csv = require('json-2-csv');

var happynessData = fs.readFileSync("happynessData.csv", "utf8");
var timeUse = fs.readFileSync("TimeUse.csv", "utf8");

var countryHappyDataSet = [];
var convertedDataSet = [];

var converter = new Converter({});
converter.fromString(happynessData, function(err, result) {
    if(err) {
        console.error(err);
    }
    
    result.forEach(function(object) {
        countryHappyDataSet.push({
            Country: object.Country,
            'Happiness score': object["Happiness score"]
        })
    });
    
//    console.log(countryHappyDataSet);
    
    var converter2 = new Converter({});
    converter2.fromString(timeUse, function(err, result) {
        if(err) {
            console.error(err);
        }

        result.forEach(function(object) {
            countryHappyDataSet.forEach(function(itteration) {
                if(itteration.Country === object["GEO/ACL00"]) {
                    var currentObj = {};
                    currentObj = object;
                    currentObj["Happiness score"] = itteration["Happiness score"];
                    convertedDataSet.push(currentObj);
                }
            });
        });
        console.log(convertedDataSet);
        console.log("length: " + convertedDataSet.length);
        
        json2csv.json2csv(convertedDataSet, function(err, csv) {
            if(err) {
                console.error(err.message);
            }
            
                        
            //fs.writeFileSync("convertedDataSet")
            
        });//convert json2csv
    }); //converter2 timeUse

}); //converter happynessData




