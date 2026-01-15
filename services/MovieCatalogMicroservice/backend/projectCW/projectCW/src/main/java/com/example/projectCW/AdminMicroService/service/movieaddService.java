package com.example.projectCW.AdminMicroService.service;

import com.example.projectCW.AdminMicroService.data.movieadd;
import com.example.projectCW.AdminMicroService.data.movieaddRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;

@Service
public class movieaddService {

    @Autowired
    private movieaddRepository movieaddRepository;

    @Value("${file.upload-dir}")
    private String uploadDir;

    public movieadd createMovie(String name, Double price, String title, MultipartFile photo) throws IOException {
        movieadd movie = new movieadd();
        movie.setName(name);
        movie.setPrice(price);
        movie.setTitle(title);


        if (photo!= null &&!photo.isEmpty()) { // Check if photo is provided
            String fileName = StringUtils.cleanPath(photo.getOriginalFilename());
            Path uploadPath = Paths.get(uploadDir);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(fileName);
            try {
                Files.copy(photo.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
            } catch (IOException e) {
                throw new IOException("Error saving image file: " + e.getMessage());
            }

            movie.setPhotoPath("/uploads/" + fileName); // Set the path
        } else {
            throw new IllegalArgumentException("Photo cannot be empty");
        }


        return movie;
    }

    public movieadd saveMovie(movieadd movie) {
        if (movieaddRepository.count() > 4) {
            throw new RuntimeException("Maximum number of movies reached. Cannot add more.");
        }
        movie.setAddedDate(LocalDate.now());
        return movieaddRepository.save(movie);
    }
}
