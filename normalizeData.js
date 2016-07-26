var fs =require("fs");
var Converter = require("csvtojson").Converter;
var prettyjson= require("prettyjson");
var _ = require("lodash");

var world_happiness_indicators_2016 = fs.readFileSync("world_happiness_indicators_2016.csv", "utf8");
var timeUse = fs.readFileSync("TimeUse.csv", "utf8");

console.log(typeof timeUse);
var converter = new Converter({});
converter.fromString(world_happiness_indicators_2016, function(err,result){
    if(err) {
        console.log(err.message);
    }
    var options = {
  noColor: true
};
//    console.log(result);
  //console.log(prettyjson.render(result, options));
});

var countries = [];
var converter = new Converter({});
converter.fromString(timeUse, function(err,result){
    console.log(result);
  result.forEach(function(object) {
      countries.push(object["GEO/ACL00"]);
  });
    console.log(countries);
});