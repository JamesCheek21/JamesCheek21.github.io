//hamburger menu
$(document).ready(function(){
	$('#icon').click(function(e){
		e.preventDefault();
		$('body').toggleClass('with--sidebar');
	});
	$('#site-cache').click(function(e){
		$('body').removeClass('with--sidebar');
	});
});
$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('header').addClass('scroll');
       $('#logo').css("height", "65%");
     }
    else {
      $('header').removeClass('scroll');
      $('#logo').css("height", "100%");
    }
  });
});
$(function() {
	$('nav.menu a').bind('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
		/*
		if you don't want to use the easing effects:
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		*/
		event.preventDefault();
	});
});
