(function($){
  $.fn.extend({
    timeToHappiness: function(category, time) {

      //var options = $.extend(defaults, options);

      //console.log(dataSet);

      var sortedDataSet = _.sortBy(Happiness.dataSet, function(item) { return /*timeToMinutes(*/item[category]/*)*/ });

      var myArray=[];

      sortedDataSet.forEach(function (item){
        myArray.push(timeToMinutes(item[category]));
      })

      //var myTime=timeToMinutes(time);

      function closest(list, x) {
        var min,
          chosen = 0;
        for (var i in list) {
          min = Math.abs(list[chosen] - x);
          if (Math.abs(list[i] - x) < min) {
            chosen = i;
          }
        }
        return chosen;
      }


      console.log(minutesToTime(myArray[closest(myArray, time)]));

      return sortedDataSet[closest(myArray, time)]['Happiness score'];

    }
  });
})(jQuery);