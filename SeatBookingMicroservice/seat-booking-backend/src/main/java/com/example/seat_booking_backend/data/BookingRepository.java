package com.example.seat_booking_backend.data;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
    List<Booking> findByMovieIdAndDateAndTime(String movieId, String date, String time);
}