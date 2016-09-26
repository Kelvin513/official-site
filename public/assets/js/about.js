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
  $("button.close").click(function(){
    $(".modal-wrap").fadeOut(300);
    //$(".modal").fadeOut(300);
  })
  $(".tab-unit.intro").click(function(){
    $(".modal-case").css("display","none");
    $(".modal-intro").fadeIn(300);
    $(".intro").addClass("active");
    $(".case").removeClass("active");
  })
  $(".tab-unit.case").click(function(){
    $(".modal-intro").css("display","none");
    $(".modal-case").fadeIn(300);
    $(this).addClass("active");
    $(".intro").removeClass("active");
  })
  $(".previous").click(function(){
    //$(".modal-content").css("display","none");
    
    setTimeout(function(){ 
      $(".modal-content").fadeOut(100);
      //$(".modal-content").css("display","none");
      setTimeout(function(){ 
        $(".modal-content").fadeIn(400);
        $(".modal-title").html("Web Developer<br> 貝殼杯麵");
        $(".modal-content-block.right").css("background-image","url('/assets/img/main/test.png')");
        $(".modal-intro").html("貝殼杯麵貝殼杯麵貝殼杯麵超胖超讚")
        $(".modal-name").html("<h3>Baymax <span>杯麵呀</span></h3>")
      }, 400);
    },100);
    
  })
  $(".next").click(function(){
     setTimeout(function(){ 
      $(".modal-content").fadeOut(100);
      //$(".modal-content").css("display","none");
      setTimeout(function(){ 
        $(".modal-content").fadeIn(400);
        $(".modal-title").html("Web Developer<br> 挖洗杯麵唷");
        $(".modal-name").html("<h3>Fat Uncle <span>你的胖叔</span></h3>")
        $(".modal-content-block.right").css("background-image","url('/assets/img/main/test.jpg')");
        $(".modal-intro").html("我是比較邪惡的杯麵，我是比較邪惡的杯麵我是比較邪惡的杯麵我是比較邪惡的杯麵")
      }, 400);
    },100);
  })

});

//reveal效果
window.sr = ScrollReveal();
sr.reveal('.sec1 .reveal',300);
sr.reveal('.sec2 .reveal',400);
sr.reveal('.sec3 .reveal',400);
sr.reveal('.sec4 .reveal',400);
sr.reveal('.sec5 .reveal',340);




