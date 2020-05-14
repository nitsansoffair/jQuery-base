$(function() {
    // const specialLink = $('#special-link');
    // console.log(specialLink.attr('href'));

    // specialLink.attr('href', 'http://change');

    // const checkbox = $('input:checkbox');
    // console.log(checkbox.prop('checked'));
    // checkbox.prop('checked', false);

    const textInput = $('input:text');
    textInput.val('Change');
    console.log(textInput.val());

    const rangeInput = $('input[type="range"]');
    console.log(rangeInput.val());
});
