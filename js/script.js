$(function() {
    $('#btn-click').click({
        user: 'Peter',
        domain: 'domain.com'
    }, function (event) {
        greetUser(event.data);
    });

    function greetUser(userData) {
        username = userData.user || 'Anonymous';
        domain = userData.domain || 'Domain';
        alert(username + ' ' + domain);
    }
});
