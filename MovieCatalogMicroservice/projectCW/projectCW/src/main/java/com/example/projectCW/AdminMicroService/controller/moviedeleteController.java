package com.example.projectCW.AdminMicroService.controller;

import com.example.projectCW.AdminMicroService.service.moviedeleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/movie")
public class moviedeleteController {

    @Autowired
    private moviedeleteService movieDeleteService;

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMovieById(@PathVariable Long id) {
        movieDeleteService.deleteMovieById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/name/{name}")
    public ResponseEntity<Void> deleteMovieByName(@PathVariable String name) {
        movieDeleteService.deleteMovieByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}