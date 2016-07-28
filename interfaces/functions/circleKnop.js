(function() {
	var activityFields = {};
	var circleKnop = {};
	var activityMinMax = {};

	circleKnop.init = function(activity, activityNr, activityData, activityFlds) {

		console.log("Knop closure testing");

		activityMinMax = activityData;
		activityFields = activityFlds;

		var min = activityMinMax[activity].min;
		var max = activityMinMax[activity].max;

		//TESTTESTTEST
		console.log(17, "test init");
		//TESTTEST

		$("#knopInterface #title").html(activity);
        $('.dial').val(min).knob({
            "min": min,
            "max": max,
            "fgColor": "#A94442",
            "bgColor": "#FFFFFF",
            'change': function (v) {
                console.log(v);
                userData.setActivityValue(activity, v);

                // timeUse.updateCountrySelect(userData.getCurrentActivity(), userData.getCurrentActivityNr());
            },
			"format": function (value) {
				return minutesToTime(value);
			},
			"draw": function () {
				$(".dial").css("font-size", "1.5em"); 
			}
        });



        console.log(35, "button showen");

		//button needs to bee specified
		$('.circleButton').click(function () {
		    direction = $(this).attr('id');
		    console.log(direction);
		    
		    if(direction === 'left' && activityNr != 0) {
		        activityNr--;
		        userData.setCurrentActivityNr(activityNr);
		        circleKnop.changeCircle(activityFields[activityNr], activityNr);
		        

		        // activity = actArr[activityNr];
		        // console.log("activity: " + activity);
		        // console.log(actArr);
		        
		        // changeButton();
		    } else if(direction === 'right' && activityNr !== (activityFields.length-1)) {
		        console.log(53, activityNr);
		        activityNr++;
		        console.log(userData.getCurrentActivity());
		        console.log(54, activityNr);
		        userData.setCurrentActivityNr(activityNr);
		        userData.setCurrentActivity(activityFields[activityNr]);
		        circleKnop.changeCircle(activityFields[activityNr], activityNr);

		        // activity = actArr[activityNr];
		        // console.log("activityNr: " + activityNr);
		        // console.log("activity: " + activity);
		        // console.log(actArr);
		        
		        // changeButton();
		    }
		})

		// timeUse.moveBar(6);

		console.log(33, "end circle knop");

	}

	circleKnop.changeCircle = function(activity, activityNr){

		console.log(67, "changeCircle");

		var min = activityMinMax[activity].min;
		var max = activityMinMax[activity].max;

		$("#title").html(activity);
        $('.dial').val(min).trigger('change').knob({
            //UI
            "min": min,
            "max": max,
            "fgColor": "#A94442",
            "bgColor": "#FFFFFF",
            "cursor": true,

            //Behaviors
            'change': function (v) {
                console.log(v);
                userData.setActivityValue(activity, v);
                
                console.log(97, getCurrentActivity());
                console.log(98, getCurrentActivityNr());
                
                // timeUse.updateCountrySelect(userData.getCurrentActivity(), userData.getCurrentActivity());
            },
            // "format", function (value) {
            // 	return timeToMinutes(value);
            // }

        });
	}



	window.circleKnop = circleKnop;
})();