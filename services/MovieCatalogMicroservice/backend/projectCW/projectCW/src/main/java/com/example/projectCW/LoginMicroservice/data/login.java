package com.example.projectCW.LoginMicroservice.data;

public class login { // Name corrected to PascalCase

    private Long id;
    private String email;
    private String password;

    // Getters and Setters
    public String getUsername() {
        return email;
    }

    public void setUsername(String username) {
        this.email = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}