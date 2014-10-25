console.log('drew prescott 2014');

$(function(){
  setInterval(function() {
    //create random value for this itteration.
        var rand = _.random(0,15);

    //set the first random li as active.
        $('tr').children().eq(rand).addClass('active');

    //set the click function that will remove that class
        $('tr').children().eq(rand).on('click', function(e){
    //--Element clicked remove the class of active
          $( this ).removeClass('active');
        });

    //If person become idel, and all tds become active, restart
        if(!$("td:not(.active)").length){
          $('td').removeClass('active');
    }
  }, 1000 );



























  /*  var body = $('table tr');
    var tds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var rand = _.random(0, 15);
    body.children().eq(rand).addClass('active');

    _(tds).forEach(function(num) {
          body.children().eq(num).on('click', function(e){
          $( this ).removeClass('active');

                      function other(i) {
                      var index = $( "td" ).index( i );
                        if ( index % 2 === 0 ) {
                          return $('table tr').children().prevAll().first();
                        } else {
                          return $('table tr').children().nextAll().last();
                        }
                      }

          other(body.children().eq(num)).addClass('active');
      });

  });
  //_([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
*/



});
