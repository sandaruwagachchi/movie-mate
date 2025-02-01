package com.hellonibm.loginbackend.Service.impl;

import com.hellonibm.loginbackend.Dto.LoginDTO;
import com.hellonibm.loginbackend.Entity.User;
import com.hellonibm.loginbackend.Dto.UserDTO;
import com.hellonibm.loginbackend.Repo.UserRepo;
import com.hellonibm.loginbackend.Service.UserService;
import com.hellonibm.loginbackend.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserIMPL implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUserid(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword())
        );
        userRepo.save(user);
        return user.getUsername();
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        System.out.println("🔹 Login attempt for email: " + loginDTO.getEmail());

        User user1 = userRepo.findByEmail(loginDTO.getEmail());
        if (user1 == null) {
            System.out.println("❌ Email not found!");
            return new LoginResponse("Email not exists", false);
        }

        System.out.println("✅ User found: " + user1.getUsername());
        boolean isPwdRight = passwordEncoder.matches(loginDTO.getPassword(), user1.getPassword());

        if (!isPwdRight) {
            System.out.println("❌ Password mismatch!");
            return new LoginResponse("Password Not Match", false);
        }

        System.out.println("✅ Login Successful!");
        return new LoginResponse("Login Success", true);
    }

    @Override
    public String deleteUserByEmail(String email) {
        User user = userRepo.findByEmail(email);
        if (user != null) {
            userRepo.delete(user);
            return "User deleted";
        } else {
            return "User not found";
        }
    }

}
