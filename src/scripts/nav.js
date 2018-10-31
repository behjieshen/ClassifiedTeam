$(document).ready(function() {
  AOS.init();
  $('.nav-logo-hamburger').click(function() {
    $('.nav-content.mobile').toggleClass('nav-mobile-close');
    $('.nav-logo-hamburger').toggleClass('is-active');
  });

  $('.nav-content.mobile .nav-link').click(function() {
    $('.nav-logo-hamburger').click();
  });
});
