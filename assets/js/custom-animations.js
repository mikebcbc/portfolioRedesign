// If object is in viewport

;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

// Smooth scroling + close menu when clicked

function scrollNav() {
  $('menu a').click(function(){  
  	$('#nav-menu').trigger('click');
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 0
    }, 1000);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();


$(document).ready(function(){
	// Toggle menu when clicked
	$('#nav-menu').click(function(){
		$(this).toggleClass('open');
		$('html').toggleClass('menu-active');
	});
	// Contact bar toggls
	$('.contact-cta').click(function() {
		$('.contact-bar').toggleClass("contact-bar-open");
		$('.contact-info').toggleClass("contact-info-open");
		$('.contact-cta').toggleClass("contact-cta-open");
	});
	// Show skill list when in view
	$(".skill-list").inViewport(function(px){
	    if(px) $(this).addClass("animating-bar") ;
	});
});