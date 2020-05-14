$(function() {
    $('#btn-hover').hover(function () {
        alert('Hover');
    });

    $('.green-box').hover(function () {
        $(this).text('Hover');
    });

    const blueBox = $('.blue-box');
    // blueBox.mouseenter(function () {
    //     $(this).stop().fadeTo(500, 0.7);
    // });
    // blueBox.mouseleave(function () {
    //     $(this).stop().fadeTo(500, 1);
    // });

    blueBox.hover(function () {
        $(this).stop().fadeTo(500, 0.7);
    }, function () {
        $(this).stop().fadeTo(500, 1);
    });
});
