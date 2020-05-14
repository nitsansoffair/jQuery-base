$(function() {
    const galleryImage = $('.gallery').find('img').first();
    const images = [
        './images/laptop-mobile_small.jpg',
        './images/laptop-on-table_small.jpg',
        './images/people-office-group-team_small.jpg'
    ];

    let i = 0;
    setInterval(function () {
        i = (i + 1) % images.length;
        galleryImage.fadeOut(function () {
            $(this).attr('src', images[i]);
            $(this).fadeIn();
        });
        console.log(galleryImage.attr('src'));
    }, 2000);
});
