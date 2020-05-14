$(function() {
    $('html').keydown(function (event) {
        if (event.which === 39) {
            $('.blue-box').stop().animate({
                'margin-left': '+=10px'
            }, 50);
        }
    });
});
