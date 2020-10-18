
jQuery(document).ready(function() {
	
	/*
	    Open / Close Menu 
	*/
	$('.hamburger-button button').on('click', function(){
		$('.top-menu').toggleClass('active');
		$(this).toggleClass('menu-closed');
	});
	
});
