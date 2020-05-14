$(function() {
    const gallery = $('.gallery');
    const images = [
        './images/laptop-mobile_small.jpg',
        './images/laptop-on-table_small.jpg',
        './images/people-office-group-team_small.jpg'
    ];

    gallery.data('availableImages', images);
    console.log(gallery.data('availableImages'));

    gallery.data('name', 'The Awesome Gallery');
    console.log(gallery.data());

    gallery.removeData('name');
    console.log(gallery.data());

    const firstPar = $('p:first');
    console.log(firstPar.data('mydata'));
});
