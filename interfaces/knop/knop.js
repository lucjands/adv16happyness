$(function() {
    console.log("test");
    $(".dial").knob({
        'change': function(v) {
            console.log(v);
        }
    });
    console.log("values:");
});