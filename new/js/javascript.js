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
});
