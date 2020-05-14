$(function() {
    const firstPar = $('p:first');
    console.log(firstPar.text());
    console.log(firstPar.html());

    console.log($('p').html());
    firstPar.text('<strong>Hello</strong>');

    firstPar.html('<strong>Hello</strong> World!');
    firstPar.html(firstPar.html() + ' appended.');
});
