document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendButton').addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Check if any field is empty
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Construct the email body
        var emailBody = 'Name: ' + name + '\n' +
                        'Email: ' + email + '\n' +
                        'Message: ' + message;

        // Send the email data to your server using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'send_email.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email.');
            }
        };
        xhr.send('name=' + encodeURIComponent(name) +
                 '&email=' + encodeURIComponent(email) +
                 '&message=' + encodeURIComponent(message));
    });
});
