var KnopInterface = function KnopInterface (dataSet, actArr, activityNr, activityValues) {
    
    this.init() {
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
    }
    this.createknop = function (activity ,minVal, maxVal) $(function () {
        console.log(activity);
        $("#title").html(activity);
        $('.dial').knob({
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
    
    
    
    
    
    this.createknop(actArr[activityNr], 4/*test value*/, 105 /*test value*/);
}