var fs = require("fs");
var Converter = require("csvtojson").Converter;
var prettyjson= require("prettyjson");
var _ = require("lodash");

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
      countries.push(object["GEO/ACL00"]);
  });
    
    var converter2 = new Converter({});
converter2.fromString(world_happiness_indicators_2016, function(err,result){
    if(err) {
        console.log(err.message);
    }
    
    result.forEach(function(insteanses) {
        countries.forEach(function(useCountry) {
            if(useCountry == insteanses.Country) {
                dataSet.push(insteanses);
            }
        })
    })
    
    console.log(dataSet);
    
    var options = {
        noColor: true
    };
//    console.log(result);
//    console.log(prettyjson.render(result, options));
})
    
    console.log(countries);
});


