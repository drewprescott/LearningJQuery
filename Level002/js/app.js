//app.js
(function() {
    //LoDash
  var colorChoice = prompt("What color should the header be?");
  var headerColor = _.find(dataColor, function(dtClr) {
    return dtClr === colorChoice;
  });

  //Jquery
  var hi = $('#hi');     //Dummy header query
  hi.text(dataPeople[_.random(0,3)].name).css("color", headerColor); // Chane header based upon random number
  $('p #toBold').css('font-weight', "bold"); // testing spans / and zeroing in on elements

  hi.hide('slow').show('slow');

  //function for story area, to generate per data.
  function assignStory (num) { // take number from the while statement
    var x = $('#content').children().eq(num); // num is passed as the location of the current childe node
    return x; //return $('#content').children().eq(#current statue#) each itteration
    }

var panel = $('#redArea');
panel.fadeOut(3000).delay(1000).fadeIn(3000);

  //itterate over length of content to populate story area
    var i = 0, divLen = $('#content').children().length, dataLen = dataContent.length;
    while (i <= dataLen){ // for the length of the story content area, run
    assignStory(i).text(dataContent[i].story);
      if(divLen >= i){
        i++;
      }}



})();
