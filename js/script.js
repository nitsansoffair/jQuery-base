$(function () {
    $('#code').load('./js/script.js');

    $('#code').load('./js/script.js', function (response, status) {
        if (status === 'error') {
            alert('error');
        }

        console.log(response);
    });
});
