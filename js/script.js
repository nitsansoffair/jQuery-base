$(function() {
    $('#checkbox').change(function () {
        const isChecked = $(this).is(':checked');
        if (isChecked) {
            $(this).add('label[for="cb"]').css('box-shadow', '0 0 4px #181');
        } else {
            $(this).add('label[for="cb"]').css('box-shadow', '0 0 4px #811');
        }
    });

    $('#selection').change(function () {
        const selectedOption = $(this).find(':selected').text();
        alert(selectedOption);
    });
});
