(function() {
	var circleKnop = {};
	var activityMinMax = {};

	circleKnop.init = function(activity, activityNr, activityData) {

		console.log("Knop closure testing");

		activityMinMax = activityData;

		var min = activityMinMax[activity].min;
		var max = activityMinMax[activity].max;

		$("#knopInterface #title").html(activity);
        $('.dial').val(min).knob({
            "min": min,
            "max": max,
            "fgColor": "#FF0000",
            'change': function (v) {
                console.log(v);
                userData.setActivityValue(v);

                timeUse.updateCountrySelect(userData.getCurrentActivity(), userData.getCurrentActivityNr());
            }
        });


		//button needs to bee specified
		$('.circleButton').click(function () {
		    console.log('reload');
		    direction = $(this).attr('id');
		    console.log(direction);
		    
		    if(direction === 'left' && activityNr != 0) {
		        console.log("Inside function");
		        activityNr--;
		        userData.setCurrentActivityNr(activityNr);
		        

		        activity = actArr[activityNr];
		        console.log("activity: " + activity);
		        console.log(actArr);
		        
		        changeButton();
		    } else if(direction === 'right' && activityNr != (actArr.length-1)) {
		        console.log("Inside function");
		        activityNr++;
		        userData.setCurrentActivityNr(activityNr);
		        

		        activity = actArr[activityNr];
		        console.log("activityNr: " + activityNr);
		        console.log("activity: " + activity);
		        console.log(actArr);
		        
		        changeButton();
		    }
		}

	}

	circleKnop.changeCircle(activity, activityNr) {

		var min = activityMinMax[activity].min;
		var max = activityMinMax[activity].max;

		$("#title").html(activity);
        $('.dial').val(min).trigger('change').knob({
            //UI
            "min": min,
            "max": max,
            "fgColor": "#FF0000",
            "cursor": true,

            //Behaviors
            'change': function (v) {
                console.log(v);
                userData.setActivityValue(v);
                
                timeUse.updateCountrySelect(userData.getCurrentActivity(), userData.getCurrentActivityNr());
            }
        });
	}



	window.circleKnop = circleKnop;
})();