//app.js
(function() {
    //LoDash & functional Javascript quick dive.
    var colorChoice = prompt("What color should the header be?");
    if (colorChoic === " ") throw new Error("A value was expected.");
    var headerColor = _.find(dataColor, function(dtClr) {
        return dtClr === colorChoice;
    });

    //Jquery
    var hi = $('#hi'); //Dummy header query
    hi.text(dataPeople[_.random(0, 3)].name).css("color", headerColor); // Chane header based upon random number
    $('p #toBold').css('font-weight', "bold"); // testing spans / and zeroing in on elements

    hi.hide('slow').show('slow');

    //function for story area, to generate per data.
    function assignStory(num) { // take number from the while statement
        var x = $('#content').children().eq(num); // num is passed as the location of the current childe node
        return x; //return $('#content').children().eq(#current statue#) each itteration
    }

    $('#skills option').eq(2).prop('selected', true); //toggel the checkbox

    var cent = $('#callout');
    cent.addClass('panel').fadeIn(3000);

    $('#buttonGroup').append('<li>' + ' Five '  + '</li>');
    $('aside ul:first li').eq(2).replaceWith('<li>' + ' square '  + '</li>');
    $('aside ul:first li').eq(2).addClass('button  tiny');
    $('#buttonGroup').children().eq(4).addClass('button  tiny');

    $('li').text(
      function( i, text ){
        return ( i + 1 ) + ". " + text;
      }
    );

    //$('p').wrap('<div>').css({
      //''"background-color": "red",
      //"font-weight": "bold"
    //});

    $('#bio').html('<p>'  + dataContent[0].story + '<p>').addClass('panel').fadeOut(4000).show('fast');

    var e = $('#cntr');
    console.log( e.data('name') );
    console.log( e.data('type') );
    e.data("counter", 1);
    console.log( e.data('counter') );


    //itterate over length of content to populate story area
    var i = 0,
        divLen = $('#content').children().length,
        dataLen = dataContent.length;
    while (i <= dataLen) { // for the length of the story content area, run
        assignStory(i).text(randData[i].first_name).addClass('panel');
        i++;
    }


})();
