//template js file

$(function () {

  $("#wrapper").append("<div class='push'></div>");  // Sticky Footer
  
  $('#gallery a.image, a#inline').fancybox();

  $('form.site_contact input[type=text], form.site_contact textarea').focus(function(e){
    $(this).prev('label').fadeOut('fast');
  })
  
  $('form.site_contact input[type=text], form.site_contact textarea').blur(function(e){
    if($(this).val() == ""){
      $(this).prev('label').fadeIn('fast');
    }
  })
  
});