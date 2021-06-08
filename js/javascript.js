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
    $('.submit').click(function (event) {

    console.log('Clicked button');

    var name = $('#contact-name').val();
    var email = $('#contact-email').val();
    var subject = $('#contact-subject').val();
    var message = $('#contact-message').val();
    var statusElement = $('.status');
    statusElement.empty();

    if(name.length >= 1){
      statusElement.append('<div>Name is valid</div>');
    }
    else{
      event.preventDefault();
      statusElement.append('<div>Name is invalid</div>');
    }

    if (email.length > 5 && email.includes('@') && email.includes('.')){
      statusElement.append('<div>Email is valid</div>');
    }
    else{
      event.preventDefault();
      statusElement.append('<div>Email is invalid</div>');
    }

    if(subject.length >= 2){
      statusElement.append('<div>Subject is valid</div>');
    }
    else{
      event.preventDefault();
      statusElement.append('<div>Subject is invalid</div>');
    }

    if(message.length >= 30){
      statusElement.append('<div>Message is valid</div>');
    }
    else{
      event.preventDefault();
      statusElement.append('<div>Message is invalid</div>');
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
