$(document).ready(function() {
    //$("#nav-placeholder").load("nav.html");
    $(window).scroll(function(){
      if(this.scrollY > 20)
        $(".nav-bar").addClass("sticky");
      else
        $(".nav-bar").removeClass("sticky");
    });

    $('.menu-toggler').click(function(){
      console.log("clicked");
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });

    $(".works").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
        enabled: true
      }
    });
});
$(function() {
	$('nav.menu a').bind('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		/*
		if you don't want to use the easing effects:
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		*/
		event.preventDefault();
	});
});
