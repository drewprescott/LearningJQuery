

$(function(){



  setInterval(function() {
        var list = [];

        for (var i = 0, b = 15; i <= b; i++){
          list.push(_.random(0,15));
        }

        $('tr').children().eq(list[0]).addClass('active');

        $('tr').children().eq(list[0]).on('click', function(e){
          $( this ).on('click', function(e){$(e.target).removeClass('active');});
        });



  }, 1000);



























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
