package com.example.projectCW.LoginMicroservice.controller;

import com.example.projectCW.LoginMicroservice.data.register;
import com.example.projectCW.LoginMicroservice.service.registerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/new/register")
public class registerController {

    @Autowired
    private registerService registerService;

    @PostMapping("/user")
    public register AddUser(@RequestBody register register) {
        return registerService.AddUser(register);
    }

    @GetMapping("/user")
    public List<register> GetUser() {
        return registerService.getregisterList();
    }
}