// Freelancer Theme JavaScript
/*
(function($) {
	"use strict"; // Start of use strict

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	});

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse nav ul li a').click(function(){
		$('.navbar-toggle:visible').click();
	});


})(jQuery); */// End of use strict


/* When the user clicks on the button,
	toggle between hiding and showing the dropdown content */
var drop = document.querySelector('.section-header_toggle-button');
drop.addEventListener('click', openButterbread);
function openButterbread() {
	var open = document.querySelector(".section_header_group-of-buttons");
	var close = document.querySelector(".dropping-menu");
	if (open && open.classList.contains('section_header_group-of-buttons')) {
		open.classList.add("dropping-menu");
		open.classList.remove("section_header_group-of-buttons");
	}
	else {
		close.classList.add("section_header_group-of-buttons");
		close.classList.remove("dropping-menu");
	}
}
// Close the dropdown menu if the user clicks outside of it 


window.onclick = function(event) {
	if (!event.target.matches('.dropping-menu')) {

		var dropdowns = document.getElementsByClassName("dropping-menu");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('dropping-menu')) {
				openDropdown.classList.remove('dropping-menu');
				openDropdown.classList.add("section_header_group-of-buttons");
			}
		}
	}
}

