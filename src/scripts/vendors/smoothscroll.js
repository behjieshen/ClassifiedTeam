$(document).ready(function() {
  $('a').on('click', function(event) {
    var scrollAttr = $(this).attr('scrollTo');
    var sectionAttr = $(this).attr('section');

    if (scrollAttr !== '' && typeof scrollAttr !== typeof undefined && scrollAttr !== false) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: $(scrollAttr).offset().top
        },
        1000,
        function() {}
      );
    }
  });
});
