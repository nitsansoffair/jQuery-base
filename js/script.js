$(function() {
    const form = $('#form');
    enableFastFeedback(form);

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

function enableFastFeedback(formElement) {
    const nameInput = formElement.find('#name');
    const passwordInput = formElement.find('#password');
    const messageInput = formElement.find('#message');
    const checkboxInput = formElement.find('#checkbox');

    nameInput.blur(function (event) {
        const name = $(this).val();
        validateNameField(name, event);

        if (!isValidName(name)) {
            $(this).css({
                'box-shadow': '0 0 4px #811',
                'border': '1px solid #600'
            });
        } else {
            $(this).css({
                'box-shadow': '0 0 4px #181',
                'border': '1px solid #060'
            });
        }
    });

    passwordInput.blur(function (event) {
        const password = $(this).val();
        validatePasswordField(password, event);

        if (!isValidPassword(password)) {
            $(this).css({
                'box-shadow': '0 0 4px #811',
                'border': '1px solid #600'
            });
        } else {
            $(this).css({
                'box-shadow': '0 0 4px #181',
                'border': '1px solid #060'
            });
        }
    });

    messageInput.blur(function (event) {
        const message = $(this).val();
        validateMessageField(message, event);

        if (!isValidMessage(message)) {
            $(this).css({
                'box-shadow': '0 0 4px #811',
                'border': '1px solid #600'
            });
        } else {
            $(this).css({
                'box-shadow': '0 0 4px #181',
                'border': '1px solid #060'
            });
        }
    });

    checkboxInput.change(function (event) {
        const isChecked = $(this).is(':checked');
        validateCheckboxField(isChecked, event);

        if (!isChecked) {
            $(this).add('label[for="cb"]').css({
                'box-shadow': '0 0 4px #811',
                'border': '1px solid #600'
            });
        } else {
            $(this).add('label[for="cb"]').css({
                'box-shadow': '0 0 4px #181',
                'border': '1px solid #060'
            });
        }
    });
}

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
