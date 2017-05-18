$(document).ready(function() {
  $(".toggle-menu").on("click", function() {
    $(".menu").slideToggle(500);
    $(".menu li").css("display", "block");
    return false;
  });
  
  $(window).resize(function() {
    if($(window).width() > 500) {
      $(".menu").removeAttr("style");
      $(".menu li").css("display", "table-cell");
    }
  });
  
  $(".register-btn").magnificPopup();

})