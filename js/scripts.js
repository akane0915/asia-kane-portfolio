//UI Logic
$(document).ready(function(){
  $(".portfolio-image").mouseover(function() {
    $(this).children(".description-on-hover").show();
    $(this).addClass("dim-on-hover");
  }).mouseout(function() {
    $(this).children(".description-on-hover").hide();
    $(this).removeClass("dim-on-hover");
  });
}); //Doc ready close
