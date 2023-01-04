$(window).on("load",function(){

  $(".loader .inner").fadeOut(500, function(){
    $(".loader").fadeOut(750);
  });

})




$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 5000
  });

  var typed = new Typed(".typed", {
    strings: ["Computer Scientist.", "Web Developer.", "Traveler."],
    typeSpeed: 70,
    loop: true,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop:true,
        items: 7,
        smartSpeed :900,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })


  $("#navigation li a").click(function(e){
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({scrollTop: targetPosition - 90}, "slow");

  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation(){

    var body = $("body");

    if($(window).scrollTop() >= navTop){
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    }
    else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }

  }
  
  $("[data-fancybox]").fancybox();
  
  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });
  
  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");
    
    var selector = $(this).attr("data-filter");
    $(".items").isotope({
        filter: selector,
        animationOptions: {
          duration: 1500,
          easing: 'linear',
          queue: false
        }
    });
    return false;
  });



});
