$(document).ready(function() {
  $('.contact-form textarea').keyup(function() {
    var max = $(this).attr('maxlength');
    var len = $(this).val().length;
    var char = max - len;
    $('.contact-form p').text(char + ' characters left');
  });
});
