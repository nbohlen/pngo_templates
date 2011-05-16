//template js file
function update_content_height() {
  var headerHeight = $('#header').outerHeight();
  var footerHeight = $('#footer').outerHeight();
  var winHeight = $(window).height() - headerHeight - footerHeight;

  $('#content').css({
    minHeight : winHeight,
    paddingBottom : footerHeight
  });
  
};

$(function () {
  $(window).resize(function(){
    update_content_height();
  });
  update_content_height();
  
  // add arrow to subnav
  $('<img src="http://cdn.pagengo.de/templates/linea/images/grey_arrow_to_top.png" class="arrow_to_top" />').prependTo('ul#nav > li.root.parent > ul li:first');
  
});