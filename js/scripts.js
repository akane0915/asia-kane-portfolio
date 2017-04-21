//UI Logic
$(document).ready(function(){
  $(".portfolio-image").mouseover(function() {
    $(this).children(".description-on-hover").fadeIn();
    $(this).addClass("dim-on-hover").fadeIn();
  }).mouseout(function() {
    $(this).children(".description-on-hover").fadeOut();
    $(this).removeClass("dim-on-hover").delay(5000);
  });
}); //Doc ready close
