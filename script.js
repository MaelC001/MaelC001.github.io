$('.niveau-barre').each(function() {
  var Niveau = $(this).data('niveau');
  var ValeurN = $(this).html("<span class='valeur'></span>");
    $(this).animate({
        width: Niveau
    });
});


