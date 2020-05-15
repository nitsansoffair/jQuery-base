$(function() {
    $('#form').submit(function (event) {
        const name = $('#name').val();
        const password = $('#password').val();
        const message = $('#message').val();
        const checked = $('#checkbox').is(':checked');

        validateNameField(name, event);
        validatePasswordField(password, event);
        validateMessageField(message, event);
        validateCheckboxField(checked, event);
    });
});

function validateNameField(name, event) {
    if (!isValidName(name)) {
        $('#name-feedback').text('Please enter at least two characters.');
        event.preventDefault();
    } else {
        $('#name-feedback').text('');
    }
}

function isValidName(name) {
    return name.length >= 2;
}

function validatePasswordField(password, event) {
    if (!isValidPassword(password)) {
        $('#password-feedback').text('Please enter at least 6 characters and contain a number.');
        event.preventDefault();
    } else {
        $('#password-feedback').text('');
    }
}

function isValidPassword(password) {
    return password.length >= 6 && /.*[0-9].*/.test(password);
}

function validateMessageField(message, event) {
    if (!isValidMessage(message)) {
        $('#message-feedback').text('Please enter a message.');
        event.preventDefault();
    } else {
        $('#message-feedback').text('');
    }
}

function isValidMessage(message) {
    return message.trim() !== '';
}

function validateCheckboxField(isChecked, event) {
    if (!isChecked) {
        $('#checkbox-feedback').text('Please agree to this.');
        event.preventDefault();
    } else {
        $('#checkbox-feedback').text('');
    }
}
