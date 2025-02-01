package com.example.seat_booking_backend.data;

import jakarta.persistence.*;

@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="movie_id")
    private String movieId;

    @Column(name="user_id")
    private String userId;

    @Column(name="seat_number")
    private Integer seatNumber;

    @Column(name="date")
    private String date;

    @Column(name="time")
    private String time;

    @Column(name="status")
    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        AVAILABLE, BOOKED
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getMovieId() { return movieId; }
    public void setMovieId(String movieId) { this.movieId = movieId; }

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public Integer getSeatNumber() { return seatNumber; }
    public void setSeatNumber(Integer seatNumber) { this.seatNumber = seatNumber; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }
}
