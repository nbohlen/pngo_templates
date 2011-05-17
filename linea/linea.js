//template js file

$(function () {
  
  // add arrow to subnav
  // $('<img src="http://cdn.pagengo.de/templates/linea/images/grey_arrow_to_top.png" class="arrow_to_top" />').prependTo('ul#nav > li.root.parent > ul li:first');
  
  
  $('#nav > li a.current').css({
    backgroundColor : $('body').css('background-color'),
    borderBottom : "1px solid " + $('body').css('background-color')
  });

  $('ul#nav li').hover(
    function(){
      $(this).find('ul.children').css({
        paddingLeft : $(this).position().left + "px",
        width : (960 - $(this).position().left) + "px"
      }).fadeIn('slow');
    },
    function(){
      $(this).find('ul.children').fadeOut('slow');
    });
});