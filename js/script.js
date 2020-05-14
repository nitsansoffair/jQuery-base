$(function() {
    $('html').on('click keydown', function () {
        console.log('keydown');
    });

    const images = [
        './images/laptop-mobile_small.jpg',
        './images/laptop-on-table_small.jpg',
        './images/people-office-group-team_small.jpg'
    ];
    let i = 0;
    $('.gallery').find('img').on('click', function () {
        i = (i + 1) % images.length;
        $(this).fadeOut(function () {
            $(this).attr('src', images[i]).fadeIn();
        });
    });
});
