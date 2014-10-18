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

})();
