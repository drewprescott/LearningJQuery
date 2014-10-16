//this is my App
//Drew Prescott

//Change all paragraphs to red and italic
(function () {

    var colorLib = ["blue", "green", "red"]; //demo library of colors
    var colorPkr = prompt("What color would you like?"); // ask user for colors

    function color(lib, pkr) { // check if color chosen is in the library
        var i = 0;
        var colorz = null;
        for (i, len = lib.length; i < len; i++) {
            if (pkr !== lib[i]) {
                colorz = "grey"; // defualt to grey otherwise
            } else {
                colorz = lib[i]; // chose color based off of library
            } return colorz;
        }
    }

    $("p").css({
        "color": "red",
            "font-style": "italic"
    });

    $("h1").css({
        "color": color(colorLib, colorPkr),
        "font-style": "bold"
    }).text("This should be: " + color(colorLib, colorPkr));

    $("li").css("color", "green");

})();


//Chnage all h1 headings to blue and the text to "hello"
