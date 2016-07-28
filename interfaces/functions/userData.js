(function() {
     var userData = {};
     var dataActivities = {};
     userData.init = function(activities, activityData) {
        var activityValues = {};

        activities.forEach(function(activity) {
            activityValues[activity] = activityData[activity].min;
        })
        
        var currentActivity = activities[0];
        var currentActivityNr = 0;
        
        userData.activityValues = activityValues;
        userData.currentActivity = currentActivity;
        userData.currentActivityNr = currentActivityNr;

        dataActivities = activityData;
    }
     
     userData.setActivityValue = function(activity, value) {
        userData.activityValues[activity] = value; 
     }
     
     userData.getActivityValue = function(activity) {
         return userData.activityValues[activity];
     }
     
     userData.setCurrentActivity = function(activity) {
         if(typeof activity === "string") {
             userData.currentActivity = activity;
             userData.currentActivityNr = activities.indexOf(activity);
         } else {
             console.log("error wrong input on setCurrentActivity, input: " + activity);
         }
     }
     
     userData.setCurrentActivityNr = function(activity) {
        if(typeof activity === "number") {
            userData.currentActivityNr = activity;
            userData.currentActivity = activities[activity];
        } else {
            console.log("error wrong input on setCurrentActivity, input: " + activity);
        }
     }
     
     userData.getCurrentActivity = function(activity) {
         return userData.currentActivity;
     }
     
     userData.getCurrentActivityNr = function() {
         return currenActivityNr;
     }
     

     userData.getHappinessScore = function() {
        var offset = 0;
        for(key in dataActivities) {
            offset += compareCountries(key, activityData.indexOf(compareCountries))
        }

        return offset;
     };

     var compareCountries = function(activity, value) {
        var country;
        var offset = 9999;
        data.forEach(function(instance) {
            var difference = Math.abs(timeToMinutes(instance[activity]) - timeToMinutes(value));
            if(difference < offset) {
                offset = difference;
                country = instance.CodeExt;
            }
        });

        return offset;
    }

     window.userData = userData;
}());