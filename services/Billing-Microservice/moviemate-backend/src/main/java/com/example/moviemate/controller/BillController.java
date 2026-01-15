package com.example.moviemate.controller;

import com.example.moviemate.data.Bill;
import com.example.moviemate.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/")
@CrossOrigin(origins = "http://localhost:5173")
public class BillController {

    @Autowired
    private BillService billService;


//    @Autowired
//    private EmailService emailService;

    @GetMapping(path = "/bills")
    public List<Bill> getAllBills(){
        return billService.getAllBills();
    }

    // GET a single bill by ID
    @GetMapping("/bills/{id}")
    public Bill getBillById(@PathVariable int id){
        return billService.getBillById(id);
    }

    @PostMapping(path="/bills")
    public Bill createBill(@RequestBody Bill bill){
        return  billService.createBill(bill);
    }

    @DeleteMapping(path="/bills/{id}")
    public String deleteBill(@PathVariable int id){
        return billService.deleteBill(id);
    }



//    @PostMapping("bills/send-pdf")
//    public ResponseEntity<String> sendBillEmail(@RequestParam String email, @RequestParam("pdf") MultipartFile pdf) throws IOException {
//        byte[] pdfData = pdf.getBytes();
//        try {
//            emailService.sendEmailWithPDF(email, pdfData);
//            return ResponseEntity.ok("Email sent successfully!");
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
//        }
//    }
}











