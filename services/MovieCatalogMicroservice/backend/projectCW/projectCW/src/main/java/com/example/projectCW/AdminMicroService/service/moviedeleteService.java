package com.example.projectCW.AdminMicroService.service;

import com.example.projectCW.AdminMicroService.data.moviedelete;
import com.example.projectCW.AdminMicroService.data.moviedeleteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class moviedeleteService {

    @Autowired
    private moviedeleteRepository moviedeleteRepository;

    public void deleteMovieById(Long id) {
        moviedeleteRepository.deleteById(id);
    }

    public void deleteMovieByName(String name) {
        moviedeleteRepository.deleteByName(name);
    }
}