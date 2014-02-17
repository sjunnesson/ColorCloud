// this is where colorpicker created
var _pickerPadding = $(window).width() / 20;
var out = document.getElementById("output");
cp = Raphael.colorpicker(_pickerPadding, $(window).height() * 0.15, $(window).width() - _pickerPadding * 2, "#eee");
// cp2 = Raphael.colorwheel(360, 20, 300, "#eee"),


// assigning onchange event handler
var onchange = function(item) {
    return function(clr) {
        console.log(clr);

    };
};
cp.onchange = onchange(cp);

// cp2.onchange = onchange(cp);