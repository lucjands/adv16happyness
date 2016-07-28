(function(){
  var Happiness = {};
  //Happiness.activityFields
  //Happiness.activityData

  function timeToMinutes(time){
      return moment.duration(time).asMinutes();
  }

  function minutesToTime(minutes){
      return numeral(minutes).format('hh:mm');
  }

  Happiness.getRawData = function() { return Happiness.dataSet; };
  Happiness.getActivityData = function() { return Happiness.activityData; };

  Happiness.setGender = function(gender) { Happiness.gender = gender; };

  Happiness.init = function(gender) {
    Happiness.activityData = null;
    Happiness.setGender(gender);
    Happiness.activityFields = ['Personal care','Sleep','Eating','Other personal care','Employment','Commuting','Employment Activities','Study','At school and university','Homework','Household and family care','Food management','Dish washing','House cleaning','Household upkeep','Laundry','Ironing','Textile care','Gardening','Caring for pets','Construction and repairs','Errands','Childcare','Instructional childcare','Household member care','Leisure and social life','Organizing','Neighbor care','Participatory activities','Visiting and feasts','Other social life','Entertainment and culture','Resting','Walking and hiking','Sports and outdoor activities','Computing','Hobbies and games','Reading books','Other reading','TV and video','Radio and music','Unspecified leisure','Travel unrelated to work','Travel to and from work','Travel related to study','Transporting children','Unspecified time use'];
  };

  Happiness.load = function() {
    var datasetFile = (Happiness.gender === "male") ?
          "datasets/maleTimeHappynessDataset.csv" :
          "datasets/femaleTimeHappynessDataset.csv";
          // "../datasets/maleTimeHappynessDataset.csv" :
          // "../datasets/femaleTimeHappynessDataset.csv";


    return d3.promise.csv(datasetFile).then(function(data) {
      Happiness.dataSet = data;


      var dataActivity = {};
      // Initialise a pivot table
      Happiness.activityFields.forEach(function(fldname) {
        dataActivity[fldname] = {
          data: [],
          min: null,
          max: null
        };
      });

      // Pivot
      // console.log(typeof data);
      data.forEach(function (row) {
        var countryName = row.GEO;
        Happiness.activityFields.forEach(function(fldname) {
          dataActivity[fldname].data.push({
            country: countryName,
            minutes: timeToMinutes(row[fldname])
          });
        });
      });

      // Sort each column
      Happiness.activityFields.forEach(function(fldname) {
        dataActivity[fldname].data.sort(function(a, b) {
          return a.minutes > b.minutes;
        });
        dataActivity[fldname].min = dataActivity[fldname].data[0].minutes;
        var le = dataActivity[fldname].data.length - 1;
        dataActivity[fldname].max = dataActivity[fldname].data[le].minutes;
      });

      //console.log(dataActivity);
      Happiness.activityData = dataActivity;
    });
  };

  window.Happiness = Happiness;
}());
