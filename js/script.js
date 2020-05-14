$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  $('.red-box').fadeTo(3000, 0.2);
  $('.green-box').fadeTo(2000, 0.5);
  $('.yellow-box').fadeTo(1000, 0.8);

  $('.green-box').fadeToggle();
  $('.green-box').fadeToggle();
});
