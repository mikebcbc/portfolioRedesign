$(document).ready(function(){
	$('#nav-menu').click(function(){
		$(this).toggleClass('open');
	});
	$('.contact-cta').click(function() {
		$('.contact-bar').toggleClass("contact-bar-open");
		$('.contact-info').toggleClass("contact-info-open");
	});
});