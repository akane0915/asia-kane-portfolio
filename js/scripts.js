//UI Logic
$(document).ready(function(){
  $(".portfolio-image").mouseover(function() {
    $(this).children(".description-on-hover").show();
    $(".portfolio-image").text("<div class='description-on-hover'>"
                              +"<h3>DinnerMatch.com</h3>"
                              +"<p>Application to allow users to select food ingredients on hand and app returns recommended recipes</p>"
                              +"<p>HTML. CSS. BOOTSTRAP. Javascript. jQuery.</p>"
                              +"<div class='btn'>"
                              +"<a href='https://github.com/akane0915/plenty-of-ingredients'>View Project</a>"
                              +"</div>"
                              +"</div>"
    );
  }).mouseout(function() {
    $(this).children(".description-on-hover").hide();
});

}); //Doc ready close
