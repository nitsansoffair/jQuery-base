$(function() {
    // $('p').click(function () {
    //     $(this).slideUp();
    // });
    $('#content').append('<p>added.</p>');
    $('#content').on('click', 'p', function () {
        $(this).slideUp();
    });
    $('body').on('mouseenter', 'li', function () {
        $(this).css('color', '#666');
    });
});
