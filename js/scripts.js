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
}); //Doc ready close
