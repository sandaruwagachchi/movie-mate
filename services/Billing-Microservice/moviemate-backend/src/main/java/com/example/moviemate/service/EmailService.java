//package com.example.moviemate.service;
//
//import com.mailgun.client.MailgunClient;
//import jakarta.mail.Message;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import java.io.ByteArrayInputStream;
//
//@Service
//public class EmailService {
//
//    @Value("${mailgun.api.key}")
//    private String mailgunApiKey;
//
//    @Value("${mailgun.domain}")
//    private String mailgunDomain;
//
//    public void sendEmailWithPDF(String recipientEmail, byte[] pdfData) {
//        MailgunClient client = MailgunClient.create(mailgunApiKey);
//
//        // Create a message to send with PDF attachment
//        Message message = Message.builder()
//                .from("noreply@yourdomain.com")
//                .to(recipientEmail)
//                .subject("Your Bill PDF")
//                .text("Please find attached your bill in PDF format.")
//                .attachment("bill.pdf", new ByteArrayInputStream(pdfData), "application/pdf")
//                .build();
//
//        client.sendMessage(mailgunDomain, message);
//    }
//}
