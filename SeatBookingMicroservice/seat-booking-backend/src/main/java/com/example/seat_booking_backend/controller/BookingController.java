package com.example.seat_booking_backend.controller;

import org.springframework.http.ResponseEntity;
import com.example.seat_booking_backend.data.Booking;
import com.example.seat_booking_backend.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/{movieId}/{date}/{time}")
    public List<Booking> getBookingsByMovieIdAndDateTime(
            @PathVariable String movieId,
            @PathVariable String date,
            @PathVariable String time) {
        return bookingService.getBookingsByMovieIdAndDateTime(movieId, date, time);
    }

    @PostMapping("/book")
    public List<Booking> bookSeats(@RequestBody List<Booking> bookings) {
        return bookingService.bookSeats(bookings);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Integer id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.ok("Booking deleted successfully");
    }

}
