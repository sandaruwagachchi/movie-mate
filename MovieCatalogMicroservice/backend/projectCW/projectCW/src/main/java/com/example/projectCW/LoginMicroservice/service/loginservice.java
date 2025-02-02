package com.example.projectCW.LoginMicroservice.service;

import com.example.projectCW.LoginMicroservice.data.register;
import com.example.projectCW.LoginMicroservice.data.loginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class loginservice {

    @Autowired
    private loginRepository loginRepository;

    public boolean validateUser(String email, String password) { // වෙනස් කරන ලදි
        Optional<register> user = loginRepository.findByEmailAndPassword(email, password); // වෙනස් කරන ලදි
        return user.isPresent();
    }

}