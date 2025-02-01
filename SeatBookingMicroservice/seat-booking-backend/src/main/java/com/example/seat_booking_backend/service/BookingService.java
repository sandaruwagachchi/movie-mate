package com.example.seat_booking_backend.service;

import com.example.seat_booking_backend.data.Booking;
import com.example.seat_booking_backend.data.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getBookingsByMovieIdAndDateTime(String movieId, String date, String time) {
        return bookingRepository.findByMovieIdAndDateAndTime(movieId, date, time);
    }

    public List<Booking> bookSeats(List<Booking> bookings) {
        for (Booking booking : bookings) {
            booking.setStatus(Booking.Status.BOOKED);
        }
        return bookingRepository.saveAll(bookings);
    }

    public void deleteBooking(Integer id) {
        if (!bookingRepository.existsById(id)) {
            throw new RuntimeException("Booking not found");
        }
        bookingRepository.deleteById(id);
    }

}



