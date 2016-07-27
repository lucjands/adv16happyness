var fs = require("fs");
var Converter = require("csvtojson").Converter;
var _ = require("lodash");
var json2csv = require('json-2-csv');
var prettyjson= require("prettyjson");

var cleanTimeHappynessData = fs.readFileSync("cleanTimeHappynessData.csv", "utf8");

var converter = new Converter({});
converter.fromString(cleanTimeHappynessData, function(err, data) {
    if(err) {
        console.error(err);
    }
    
   
//    SEX
    var femaleData = [];
    var maleData = [];
    data.forEach(function(instance) {
        console.log(instance);
        if(instance["GEO"] === "Germany (including  former GDR from 1991)") {
            instance["GEO"] = "Germany";
           }
        if(instance.SEX === "Males") {

            maleData.push(instance);
        } else if (instance.SEX === "Females") {

            femaleData.push(instance);
        }
        
    });

    console.log("\nmale data:\n" + prettyjson.render(maleData));
    console.log("\nfemale data:\n" + prettyjson.render(femaleData));
    
//    ###Export as csv files
    json2csv.json2csv(maleData, function(err, maleCsv) {
        if(err) {
            console.error(err.message);
        }
        
        fs.writeFileSync("maleTimeHappynessDataset.csv", maleCsv);
    });
    
    json2csv.json2csv(femaleData, function(err, femaleCsv) {
        if(err) {
            console.error(err.message);
        }
        
        fs.writeFileSync("femaleTimeHappynessDataset.csv", femaleCsv);
    });
    
});