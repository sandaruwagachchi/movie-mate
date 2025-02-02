package com.example.projectCW.LoginMicroservice.service;

import com.example.projectCW.LoginMicroservice.data.register;
import com.example.projectCW.LoginMicroservice.data.registerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class registerService {

    @Autowired
    private registerRepository registerRepository;



    // Add user
    public register AddUser(register register) {
        // BCryptPasswordEncoder භාවිතා කර password එක hash කරන්න
        String encodedPassword = (register.getPassword());
        register.setPassword(encodedPassword);

        return registerRepository.save(register);
    }

    // Get user list
    public List<register> getregisterList() {
        return registerRepository.findAll();
    }
}