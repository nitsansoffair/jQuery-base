$(function() {
    $('#form').submit(function (event) {
        const textarea = $('#message');

        if (textarea.val().trim() === '') {
            textarea.css('box-shadow', '0 0 4px #881');
            event.preventDefault();
        } else {}
    });
});
