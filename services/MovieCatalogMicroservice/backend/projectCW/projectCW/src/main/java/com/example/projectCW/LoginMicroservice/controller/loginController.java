package com.example.projectCW.LoginMicroservice.controller;

import com.example.projectCW.LoginMicroservice.service.loginservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/log/login")
public class loginController {

    @Autowired
    private loginservice loginservice;

    @PostMapping("/userlog")
    public String loginUser(@RequestParam String email, @RequestParam String password) {
        if (loginservice.validateUser(email, password)) {
            return "Login successful!";
        } else {
            return "Invalid email or password!";
        }
    }
}