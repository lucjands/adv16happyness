$(function () {
    $('.dial').knob({
        'change': function (v) {
            console.log(v);
        }
    });
});


    

$('button').click(function () {
    console.log('reload');
    $('.dial').val(0).trigger('change').knob({
        'angleArc': 5,
        'change': function (v) {
            console.log(v);
        }
    })
})

