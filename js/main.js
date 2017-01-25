$(document).ready(function() {

  $('.lightbox').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    titleSrc: 'title',
    gallery: {
      enabled: true
    }
  });
  $(".pictureSearch").on("keyup", function() {
      var g = $(this).val().toLowerCase();
      $(".lightbox").each(function() {
      		var s = $(this).attr('title').toLowerCase();
          $(this).closest('li')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
      });
  });
});
