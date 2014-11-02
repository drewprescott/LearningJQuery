//app.js - Level 3
(function() {

$(function(){


//Hover over with mouse
  $('ul ').children().eq(0).bind('mouseenter mouseleave', function(e) {
    $(this).toggleClass('tiny'); //this is the current element
    });

//Click event
  $('#buttony').click(function(e) {
    this.href = "http://www.proterms.net";
    //alert('link not working'); will send alert, and also return faluse per below.
    //return false; run this if you want to prevent whatever the default function is.
  });

  $('#myform').submit(function(e){
    var n = $('#yourname').val();
    if(n === "") {
      alert('this is empty');
    } else {
      alert('thanks');
      }
      return false;
    });

});

  $('#buttona').bind('mouseenter mouseleave', function(e) {
  $(this).toggleClass('tiny'); //this is the current element
  });


  //Mouse over event with multi elements nested
  $(function(){

    $('#inner').bind('mouseover', function(e){
      console.clear();
      console.log("inside fired");
      return false;
      });

    $('#outer').bind("mouseover", function(e){
      console.clear();
      console.log("event type: ", e.type);
      console.log("target: ", e.target);
      console.log("currentTarget: ", e.currentTarget);
      console.log("mouse at: ", e.pageX, e.pageY);
    });

    console.log($('#rightbuttons').text());

    $('ul#rightlist').on('click', 'li', function(e){
      var ul = $(e.target).parent();
      event.preventDefault();
      var moreButtons = function(x){
        if( x.length + 1 <= 5 ) {
          return x.length + 1;
        } else {
          return false;
        }
      };
      console.log(ul.children().length);
      if (moreButtons(ul.children())) {
        ul.append("<li> new item " + moreButtons(ul.children()) + "</li>").children().addClass("button tiny alert");
          if(ul.children().length === 5){
            ul.children().eq(0).remove();
          }  // each click itterate over the lingeth of all chilldren + 1
      } else {
        $.fx.off = false;
      }
    });

  });












})();
