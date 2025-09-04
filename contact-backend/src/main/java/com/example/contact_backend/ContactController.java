package com.example.contact_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public String sendContact(@RequestBody ContactRequest contactRequest) {
        // Send mail to you
        emailService.sendToAdmin(
                contactRequest.getName(),
                contactRequest.getEmail(),
                contactRequest.getMessage(),
                contactRequest.getRating());

        // Send confirmation mail to user
        emailService.sendToUser(
                contactRequest.getEmail(),
                contactRequest.getName());

        return "Message sent successfully! Confirmation email also sent.";
    }
}
