<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = "renzledesma76@gmail.com";

    // Set email subject
    $subject = "Movie or Drama Request";

    // Compose email content
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";

    // Set additional headers
    $headers = "From: $email";

    // Send email using PHP's mail function
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email!";
    }
} else {
    echo "Invalid request!";
}
?>
