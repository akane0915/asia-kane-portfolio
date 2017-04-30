//UI Logic
$(document).ready(function(){
  // Navigation bar scroll to section on click
  $("#scroll-to-about-section").click(function() {
      $('html, body').animate({
          scrollTop: $("#about-section").offset().top
      }, 1000);
  });
  $("#scroll-to-work-section").click(function() {
      $('html, body').animate({
          scrollTop: $("#work-section").offset().top
      }, 1000);
  });
  $("#scroll-to-portfolio-section").click(function() {
      $('html, body').animate({
          scrollTop: $("#portfolio-section").offset().top
      }, 1000);
  });
  $("#scroll-to-contact-section").click(function() {
      $('html, body').animate({
          scrollTop: $("#contact-section").offset().top
      }, 1000);
  });


  $(".portfolio-item-container").mouseover(function() {
    $(this).children(".overlay").show();
  }).mouseout(function() {
    $(this).children(".overlay").hide();
  });


  // Portfolio section display description on hover
  // $(".portfolio-image").mouseover(function() {
  //   $(this).children(".description-on-hover").show();
  //   $(this).addClass("dim-on-hover");
  // }).mouseout(function() {
  //   $(this).children(".description-on-hover").hide();
  //   $(this).removeClass("dim-on-hover");
  // });
}); //Doc ready close
