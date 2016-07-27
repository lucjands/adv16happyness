var fs = require("fs");
var Converter = require("csvtojson").Converter;
var prettyjson= require("prettyjson");
var _ = require("lodash");
var json2csv = require('json-2-csv');

var world_happiness_indicators_2016 = fs.readFileSync("world_happiness_indicators_2016.csv", "utf8");
var timeUse = fs.readFileSync("TimeUse.csv", "utf8");

console.log(typeof timeUse);
console.log(timeUse);

var countries = [];
var dataSet = [];

var converter = new Converter({});
converter.fromString(timeUse, function(err, result) {
    if(err) {
        console.log(err);
    }
//    console.log(result);
  result.forEach(function(object) {
      if(object["GEO/ACL00"] === "Germany (including  former GDR from 1991)") {
          countries.push("Germany");
      } else {
      countries.push(object["GEO/ACL00"]);
      }
  });
    
    
    
    
    var converter2 = new Converter({});
converter2.fromString(world_happiness_indicators_2016, function(err,result){
    if(err) {
        console.log(err.message);
    }
    
    countries = countries.slice(14);
    console.log(countries);
    
    result.forEach(function(insteanses) {
        countries.forEach(function(useCountry) {
            var writeInstance = {};
            if(useCountry == insteanses.Country) {
                writeInstance.Country = insteanses.Country;
                writeInstance["Happiness score"] = insteanses["Happiness score"];
                dataSet.push(writeInstance);
            }
        })
    })
    
    console.log(dataSet);
    
    json2csv.json2csv(dataSet, function(err, csv) {
        fs.writeFileSync("happynessData.csv", csv);
    })
    
    
    var options = {
        noColor: true
    };
//    console.log(result);
//    console.log(prettyjson.render(result, options));
})
    
    console.log(countries);
});

