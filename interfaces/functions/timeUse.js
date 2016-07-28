(function() {
	var timeUse = {};

	var data;
	// var dataActivity;

	var happyArray = [];
    var codesArray = [];

    var min;
    var max;
    var scale:

	timeUse.init(dataSet) {
		data = dataSet;

		data.forEach(function(row) {
			happyArray.push(parseFloat(row["Happiness score"]));
			codesArray.push(row.codeExt);
		})

		min = d3.min(happyArray);
		max = d3.max(happyArray);

		scale = d3.scale.linear()
		.domain([min, max]);
		.range([40, 300]);

	}

	timeUse.draw() {

		//bars
		d3.select('svg')
                    .selectAll('rect')
                    .data(happyArray)
                    .enter()
                    .append('rect')
                    .attr('class', 'bar')
                    .attr('height', function(d, i){
                    return scale(d)
                })
                    .attr('width', 20)
                    .attr('y', function(d, i){
                        var myOffset = scale(max) - scale(d);
                        // console.log(myOffset);
                        return myOffset;
                })
                    .attr('x', function(d, i){
                        return i*25+20
                })
                    .style('fill', 'steelblue')

        //text
                d3.select('svg')
                    .selectAll('text')
                    .data(data)
                    .enter()
                    .append('text')
                    .attr('font-family', 'MyriadPro-Regular')
                    .attr('font-size', 10)
                    .attr('fill', 'white')
                        .attr('class', 'shadow')
                    .attr('x', -295)
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
                d3.select('svg')
                    .append('rect')
                    .attr('id', 'happinessbar')
                    .attr('height', 2)
                    .attr('width', function(d, i){
                        return data.length*25
                })                    
                    .style('fill', 'orange')
                    .attr('x', 18)
                    .attr('y', scale(max)/2)
                    .transition()
                    .duration(2000)
                    .attr('y', scale(max)/2-100)

	}

	timeUse.updateBar(happinessScore) {
		d3.select('svg')
		.select('.happinessbar')
		.attr('y', scale(max)/happinessScore);
	};

	timeUse.updateCountrySelect(activity, value) {
		var country = compareCountries(activity, value)
		d3.select('svg')
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
		data.forEach(function row() {
			if(country === row.country) {
				return data.indexOf(row);
			}
		});
	}

	window.timeUse = timeUse;	
})();