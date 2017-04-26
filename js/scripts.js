//UI Logic
$(document).ready(function(){
  $(".portfolio-image").mouseover(function() {
    $(this).children(".description-on-hover").show();
    $(this).addClass("dim-on-hover");
  }).mouseout(function() {
    $(this).children(".description-on-hover").hide();
    $(this).removeClass("dim-on-hover");
  });

  // new AnimOnScroll( document.getElementById( 'grid' ), {
	// 	minDuration : 0.7,
	// 	maxDuration : 1.0,
	// 	viewportFactor : 0.8
	// } );
}); //Doc ready close
