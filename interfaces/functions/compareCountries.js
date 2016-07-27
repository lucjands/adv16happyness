compareCountries = function(activity, value) {
    var country;
    var offset = 9999;
    dataSet.forEach(function(instance) {
        var difference = Math.abs(timeToMinutes(instance[activity]) - timeToMinutes(value));
        if(difference < offset) {
            offset = difference;
            country = instance.CodeExt;
        }
    });
    
    return {country, offset};
} 