package com.example.projectCW.AdminMicroService.controller;

import com.example.projectCW.AdminMicroService.data.movieadd;
import com.example.projectCW.AdminMicroService.service.movieaddService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/admin/movie")
public class movieaddController {

    @Autowired
    private movieaddService movieService;

    @PostMapping
    public ResponseEntity<?> addMovie(@RequestParam("name") String name,
                                      @RequestParam("price") String priceStr,
                                      @RequestParam("title") String title,
                                      @RequestPart("photo") MultipartFile photo) throws IOException {

        try {
            double price = Double.parseDouble(priceStr);
            movieadd movie = movieService.createMovie(name, price, title, photo);

            return ResponseEntity.status(HttpStatus.CREATED).body(new AddMovieResponse("Movie added successfully", movie));

        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body(new ErrorResponse("Invalid price format. Please provide a number."));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        } catch (IOException e) {
            return ResponseEntity.internalServerError().body(new ErrorResponse("Error saving the image file: " + e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new ErrorResponse("An unexpected error occurred: " + e.getMessage()));
        }
    }


    static class AddMovieResponse {
        private String message;
        private movieadd movie;

        public AddMovieResponse(String message, movieadd movie) {
            this.message = message;
            this.movie = movie;
        }

        public String getMessage() {
            return message;
        }

        public movieadd getMovie() {
            return movie;
        }
    }

    static class ErrorResponse {
        private String message;

        public ErrorResponse(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
    }
}