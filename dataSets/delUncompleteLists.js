var fs = require("fs");
var Converter = require("csvtojson").Converter;
var _ = require("lodash");
var json2csv = require('json-2-csv');

var timeHappynessData = fs.readFileSync("timeHappynessData.csv", "utf8");

var converter = new Converter({});
converter.fromString(timeHappynessData, function(err, data) {
    if(err) {
        console.error(err);
    }
    
    var badParams = [];
    var cleanTimeHappynessData = [];
    data.forEach(function(instance) {


        for (var property in instance) {
            if (instance.hasOwnProperty(property)) {
                if(instance[property] === ":") {
                    console.log(property);
                    
                    var include = true; 
                    badParams.forEach(function(arrayItem)   {
                        if(arrayItem === property) {
                            include = false;
                        }
                    }); //look if property is not already in array
                    
                    
                    if(include) {
                        badParams.push(property);
                    } // if not already in array include
                }
            }
        };
        
    }); // end foreach objects
    console.log(badParams + "\n");
    
    var goodParams = [];
    for(var property in data[0]) {
        if(data[0].hasOwnProperty(property)) {
            var include = true;
            badParams.forEach(function(bad) {
                if(bad === property) {
                    include = false;
                } 
            })
            
            if(include) {
                goodParams.push(property);
            }
        }
    }
    console.log("\n");
    console.log(goodParams);
    
    
    data.forEach(function(instance) {
        var cleanTimeHappynessInstance = {};
        goodParams.forEach(function(param) {
            cleanTimeHappynessInstance[param] = instance[param];
        })
        cleanTimeHappynessData.push(cleanTimeHappynessInstance);
    })
    console.log(cleanTimeHappynessData);
    
    json2csv.json2csv(cleanTimeHappynessData, function(err, csv) {
        if(err) {
            console.error(err.message);
        }
        
        fs.writeFileSync("cleanTimeHappynessData.csv", csv);
    })
    
}); // end converte to json