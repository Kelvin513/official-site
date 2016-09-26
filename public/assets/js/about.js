$(document).ready(function() {

  $(".number-20").animateNumbers(20, true, 2800);
  $(".number-100").animateNumbers(100, true, 3800);
  $(".member-unit").click(function(){
    $(".modal-wrap").fadeIn(300);
    $(".modal").fadeIn(300);
  })
  $(".modal-bg").click(function(){
    $(".modal-wrap").fadeOut(300);
    //$(".modal").fadeOut(300);
  })
  
});

//reveal效果
window.sr = ScrollReveal();
sr.reveal('.sec1 .reveal',300);
sr.reveal('.sec2 .reveal',400);
sr.reveal('.sec3 .reveal',400);
sr.reveal('.sec4 .reveal',400);
sr.reveal('.sec5 .reveal',340);




