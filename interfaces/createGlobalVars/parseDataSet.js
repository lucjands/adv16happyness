

var dataSet = {};
var actArr = [];
var activityNr;
var activityValues = [];
var gender;
var maxActArr = [];
var minActArr = [];

var datasetFile;

if(gender === "male") {
    datasetFile = "maleTimeHappynessDataset.csv";
} else {
    datasetFile = "femaleTimeHappynessDataset.csv";
}
d3.csv(datasetFile, function (data) {
       dataSet = data;
    
    console.log("test");
    
    function getActivitiesArray(data) {
        return Object.keys(data[0]).slice(3);
    }
    
    actArr = getActivitiesArray(dataSet);
    
    actArr.forEach(function(value) {
        activityValues.push(0);
    })
//    console.log(ActivityValues);
//    console.log(ActivityValues.length);
    
    activityNr = 0;
    
    //maxActArr junior
    actArr.forEach(function(prop) {
        maxActArr.push({prop: 0});
    })
    
    console.log(maxActArr);
    
//    for(var i = 0; i>actArr.length; i++) {
//        data.forEach(function(instance) {
//            //maxActArr
//            if(instance[actArr[i]] > maxActArr[actArr[i]]) {
//                
//            }
//        })
//    }
//    actArr.forEach(function(prop) {
//       data.forEach(function(instance) {
//           if(instance[prop] > )
//       }) 
//    });
});