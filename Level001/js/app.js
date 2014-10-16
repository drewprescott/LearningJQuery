//this is my App
//Drew Prescott

//Change all paragraphs to red and italic
(function () {

    var colorLib = ["blue", "green", "red"]; //demo library of colors
    var colorPkr = prompt("What color would you like?"); // ask user for colors

// Match colors chosen with Library -- Two different ways of checking, one with lodash, the other JS.

    var blah = _.find(colorLib, function(clr){ //Fun with lodash too
      return clr === colorPkr;
    });

    function color(lib, pkr) { // check if color chosen is in the library
        var arg = "yellow"; // default to this if no color is selected.
        for (var i = 0, len = lib.length; i < len; i++) {
            if (pkr === lib[i]) {
                arg = lib[i];
            }
        }
        return arg;
    }

    $("p").css({
        "color": "red",
            "font-style": "italic"
    });

    $("h1").css({
        "color": color(colorLib, colorPkr),
        "font-style": "bold"
    }).text("This should be: " + color(colorLib, colorPkr));

    $("li").css("color", blah);

})();


//Chnage all h1 headings to blue and the text to "hello"
