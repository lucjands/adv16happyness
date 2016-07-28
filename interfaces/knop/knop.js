var dataSet = {};
var actArr = [];
var activityNr;
var activityValues = [];

d3.csv('maleTimeHappynessDataset.csv', function (data) {
       dataSet = data;
    
    console.log("test");
    
    actArr = getActivitiesArray(dataSet);
    
    actArr.forEach(function(value) {
        activityValues.push(0);
    })
//    console.log(ActivityValues);
//    console.log(ActivityValues.length);
    
    activityNr = 0;
    
    createknop(actArr[activityNr], 20, 40);
});

function getActivitiesArray(data) {
//    data[0](for activity in data) {
//        if(data.hasOwnProperty(activity)) {
//            console.log(activiy);
//        }
//    }
//    return Object.keys(data[0]);
//    
//    console.log(Object.keys(data[0]));
    return Object.keys(data[0]).slice(3);
}

//var activitiesArray = getActivitiesArray(dataSet);

function createknop(activity ,minVal, maxVal) $(function () {
    console.log(activity);
    $("#title").html(activity);
    $('.dial').val(4).knob({
        //UI
        "min": 20,
        "max": 40,
        "fgColor": "#FF0000",
        
        'change': function (v) {
            console.log(v);
            activityValues[activityNr] = v;
        }
    });
});


//createknop

$('button').click(function () {
    console.log('reload');
    direction = $(this).attr('id');
    console.log(direction);
    
    if(direction === 'left' && activityNr != 0) {
        console.log("Inside function");
        activityNr--;
        activity = actArr[activityNr];
        console.log("activity: " + activity);
        console.log(actArr);
        
        changeButton();
    } else if(direction === 'right' && activityNr != (actArr.length-1)) {
        console.log("Inside function");
        activityNr++;
        activity = actArr[activityNr];
        console.log("activityNr: " + activityNr);
        console.log("activity: " + activity);
        console.log(actArr);
        
        changeButton();
    }
    
   function changeButton() {
        $("#title").html(activity);
        $('.dial').val(0).trigger('change').knob({
            //UI
            "min": 20,
            "max": 40,
            "fgColor": "#FF0000",
            "cursor": true,

            //Behaviors
            'change': function (v) {
                console.log(v);
                activityValues[activityNr] = v;
            }
        });
   }
});


