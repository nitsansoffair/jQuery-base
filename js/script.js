$(function() {
    $('#btn-click').click(function (e) {
        console.log(e);
        alert('click')
    });

    $('.red-box').click(function () {
        $(this).fadeTo(500, 0.5);
    });
    $('.red-box').click();
});
