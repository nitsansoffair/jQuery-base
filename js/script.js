$(function() {
    $('#btn-hover').hover(function () {
        alert('Hover');
    });

    $('.green-box').hover(function () {
        $(this).text('Hover');
    });
});
