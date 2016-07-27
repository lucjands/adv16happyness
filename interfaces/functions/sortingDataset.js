var dataSet = {};
        var activityNr;
        var actArr = [];
        var activityValues = [];
        var gender = window.selectedGender;
        var maxActArr = [];
        var minActArr = [];

        var datasetFile;

        if(gender === "male") {
            datasetFile = "/datasets/maleTimeHappynessDataset.csv";
        } else {
            datasetFile = "/datasets/femaleTimeHappynessDataset.csv";
        }
        d3.csv(datasetFile, function (data) {
               dataSet = data;


            function getActivitiesArray(data) {
                return Object.keys(data[0]).slice(5);
            }

            actArr = getActivitiesArray(data);

            actArr.forEach(function(value) {
                activityValues.push(0);
            })
        //    console.log(ActivityValues);
        //    console.log(ActivityValues.length);

            activityNr = 0;

            //maxActArr minActAtt junior
            
            function createMaxMinArr(initMaxMinArr) {
                actArr.forEach(function(prop) {
                    var obj = {};
                    obj[prop] = 0;
                    maxActArr.push(obj);

                    var objMin = {};
                    objMin[prop] = "24:00";
                    minActArr.push(objMin);
                })
                
                initMaxMinArr();
            }
            
            var initMaxMinArr = function () {
                for(var i = 0; i<actArr.length; i++) {
                    dataSet.forEach(function(instance) {
                        //maxActArr
                        var instanceMinutes = timeToMinutes(instance[actArr[i]]);
                        var maxActArrMinutes = timeToMinutes(maxActArr[actArr[i]]);
                        var minActArrMinutes = timeToMinutes(minActArr[actArr[i]]);
                        if(instanceMinutes > maxActArrMinutes) {

                            maxActArr[actArr[i]] = instance[actArr[i]];

                        }
                        if(instanceMinutes < minActArrMinutes) {

                            minActArr[actArr[i]] = instance[actArr[i]];

                        }
                    })
                }
                
                maxActArr.forEach(function(maxObjects) {
                            console.log(maxObjects);
                });

            }
            
            createMaxMinArr(initMaxMinArr);
            
            
            
            
            
        //    actArr.forEach(function(prop) {
        //       data.forEach(function(instance) {
        //           if(instance[prop] > )
        //       }) 
        //    });
        });