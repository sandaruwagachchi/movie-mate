package com.example.projectCW.BookingMicroService.service;

import com.example.projectCW.BookingMicroService.data.Booking;
import com.example.projectCW.BookingMicroService.data.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;


    public List<Booking> getBookingsByDate(LocalDate date) {
        return bookingRepository.findByBookingDate(date);
    }
}
