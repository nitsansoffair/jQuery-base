$(function() {
    $('.gallery').css('display', 'none'); // .hide();

    const redBox = $('.red-box');
    console.log(redBox.css('width'));
    console.log(redBox.width());

    redBox.css('background-color', '#AA7700');
    $('p').css('font-size', '18px');
    redBox.css('width', '+=20px');

    const properties = $('p').css(['font-size', 'line-height', 'color']);
    console.log(properties);

    redBox.css('user-select', 'none');
});
