var dataSet = {};
var actArr = [];
var activityNr;

d3.csv('maleTimeHappynessDataset.csv', function (data) {
       dataSet = data;
    
    console.log("test");
    
    var actArr = getActivitiesArray(dataSet);
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
    $('.dial').knob({
        //UI
        "min": 20,
        "max": 40,
        "fgColor": "#FF0000",
        
        'change': function (v) {
            console.log(v);
        }
    });
});


//createknop

$('button').click(function () {
    console.log('reload');
    direction = $(this).attr('id');
    
    if(direction === 'left') {
        activityNr--;
        activity = actArr[activityNr];
        console.log(activity);
        console.log(actArr);
        
        changeButton();
    } else if(direction === 'right') {
        activityNr++;
        activity = actArr[activityNr];
        console.log(activity);
        console.log(actArr);
        
        changeButton();
    }
    
   function changeButton() {
      $("#title").html(activity); $('.dial').val(0).trigger('change').knob({
            //UI
            "min": 20,
            "max": 40,
            "fgColor": "#FF0000",
            "cursor": true,

            //Behaviors
            'change': function (v) {
                console.log(v);
            }
    });
   }
});


