package com.example.projectCW.BookingMicroService.controller;

import com.example.projectCW.BookingMicroService.data.Booking;
import com.example.projectCW.BookingMicroService.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/book/bookings")
public class bookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/test")
    public String hello(){
        return "hello";
    }


    @GetMapping("/by-date")
    public ResponseEntity<List<Booking>> getBookingsByDate(
            @RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {

        List<Booking> bookings = bookingService.getBookingsByDate(date);
        return ResponseEntity.ok(bookings);
    }
}
