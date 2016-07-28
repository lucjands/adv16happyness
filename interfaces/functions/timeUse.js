(function() {
	var timeUse = {};

	var data;
	// var dataActivity;

	var happyArray = [];
    var codesArray = [];
    var finalArray = [];

    var min;
    var max;
    var scale;
    var sorted;

    var bar;
    var current;

	timeUse.init = function(dataSet) {
        console.log(15, "dataSet initialising");
        
        data = dataSet;

		data.forEach(function(row, i) {
            var happyScore = parseFloat(row["Happiness score"]);
			happyArray.push(happyScore);
			codesArray.push(row.codeExt);

            console.log(26, "init barChart");

            finalArray.push({
                happyness:happyScore,
                index: i
            });
		})

		min = d3.min(happyArray);
		max = d3.max(happyArray);

		scale = d3.scale.linear()
		.domain([min, max])
			.range([40, 450]);

        sorted = finalArray.slice().sort(function(a, b){
            return d3.ascending(a.happyness, b.happyness)
        });
	}

    var currRect;

	timeUse.draw = function() {

		//bars
		d3.select('#barsContainer svg')
                    .selectAll('rect')
                    .data(finalArray)
                    .enter()
                    .append('rect')
                    .attr('class', 'bar')
                    .attr('id', function(d, i) {
                        return 'myrect_' + d.index;
                    })
                    .attr('height', function(d, i){
                    return scale(d.happyness)
                })
                    .attr('width', 20)
                    .attr('y', function(d, i){
                        var myOffset = scale(max) - scale(d.happyness);
                        // console.log(myOffset);
                        return myOffset;
                })
                    .attr('x', function(d, i){
                          return i*25+20
                })
                    .style('fill', 'steelblue')

        //text
                d3.select('#barsContainer svg')
                    .selectAll('text')
                    .data(data)
                    .enter()
                    .append('text')
                    .attr('font-family', 'Fira Sans')
                    .attr('font-size', 10)
                    .attr('fill', 'white')
                        .attr('class', 'shadow')
                    .attr('x', -445)
                    .attr('y', function(d, i){
                        return i*25+32
                })
                    .attr("transform", function(d) {
                        return "rotate(-90)" 
                })
                    .text(function(d, i){
                        return d['CodeExt']
                })

                //happinessbar
                bar = d3.select('#barsContainer svg')
                    .append('rect')
                    // .attr('id', 'happinessbar')
                    .attr('height', 2)
                    .attr('width', function(d, i){
                        return data.length*25
                    })                    
                    .style('fill', 'orange')
                    .attr('x', 18)
                    .attr('y', scale(max)/2)
                
                bar.transition()
                    .duration(2000)
                    .attr('y', scale(max)/2-100)


	}

    timeUse.change = function() {
            console.log(117, sorted, userData);
            var index = -1;
            sorted.forEach(function(d, i){
                if(d.happyness == +userData.happinessScore){
                    index = i
                }
            })
            timeUse.moveBar(index);
            // var barIndex = 
            // timeUse.moveBar(userData.happinessScore);
    }

    timeUse.moveBar = function(index) {
        console.log(116, "try to use moveBar");
        current = sorted[index];
        console.log(current, max)
        
        bar.transition()
            .duration(1000)
            .attr('y', function(){
                return scale(max) - scale(current.happyness)
            })

        if(currRect){

            currRect.transition()
                .duration(1000)
                .style('fill', 'steelblue')
        }

        currRect = d3.select('svg')
            .select('#myrect_' + current.index)
        
        currRect.transition()
                .duration(1000)
                .style('fill', 'orange')
    };

	// timeUse.updateBar=function(happinessScore) {
	// 	d3.select('#barsContainer svg')
	// 	.select('.happinessbar')
	// 	.attr('y', scale(max)/happinessScore);
	// };

	timeUse.updateCountrySelect = function(activity, value) {

        console.log(102, "ping");
        console.log(103, activity);
        console.log(104, value);

		var country = compareCountries(activity, value)
		d3.select('#barsContainer svg')
		.selectAll('.bar')
		.data(happyArray)
		.attr('fill', function(d, i) {
			if(i === getCountryRow(country)) {
				return 'orange';
			} else {
				return 'steelblue';
			}
		})
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

	    return country;
	}

	var getCountryRow = function(country) {
		data.forEach(function row () {
			if(country === row.country) {
				return data.indexOf(row);
			}
		});
	}

	window.timeUse = timeUse;	
})();