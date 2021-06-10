
jQuery(document).ready(function() {
	
	/*
	    Open / Close Menu
	*/
	$('.trois-button button').on('click', function(){
		$('.top-menu').toggleClass('active');
		$(this).toggleClass('menu-closed');
	});
	
});

$('.niveau-barre').each(function() {
	var Niveau = $(this).data('niveau');
	var ValeurN = $(this).html("<span class='valeur'></span>");
	  $(this).animate({
		  width: Niveau
	  });
  });
