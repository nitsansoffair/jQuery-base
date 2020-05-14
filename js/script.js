$(function() {
    $('html').on('click keydown', logEvent);

    const images = [
        './images/laptop-mobile_small.jpg',
        './images/laptop-on-table_small.jpg',
        './images/people-office-group-team_small.jpg'
    ];
    let i = 0;
    const galleryImage = $('.gallery').find('img');
    galleryImage.on('click', switchToNextImage);

    function switchToNextImage () {
        i = (i + 1) % images.length;
        galleryImage.fadeOut(function () {
            galleryImage.attr('src', images[i]).fadeIn();
        });
    }
});

function logEvent () {
    console.log('keydown');
}
