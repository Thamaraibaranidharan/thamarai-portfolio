package com.example.contact_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    private final String FROM_EMAIL = "mbthamarai2904@gmail.com"; // must match spring.mail.username

    // Send mail to admin (you)
    public void sendToAdmin(String name, String email, String messageText, int rating) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(FROM_EMAIL);
        message.setTo(FROM_EMAIL);
        message.setSubject("New Feedback from " + name);
        message.setText(
                "Name: " + name + "\n" +
                        "Email: " + email + "\n" +
                        "Rating: " + rating + "\n\n" +
                        "Message:\n" + messageText);

        mailSender.send(message);
    }

    // Send confirmation mail to user
    public void sendToUser(String userEmail, String name) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(FROM_EMAIL);
        message.setTo(userEmail);
        message.setSubject("Thanks for your feedback!");
        message.setText("Hi " + name + ",\n\n" +
                "Thanks for reaching out! We have received your message and will get back to you soon.\n\n" +
                "Best regards,\n" +
                "Thamarai");

        mailSender.send(message);
    }
}
