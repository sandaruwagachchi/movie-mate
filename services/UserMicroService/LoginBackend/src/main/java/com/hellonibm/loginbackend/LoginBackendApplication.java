package com.hellonibm.loginbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class LoginBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(LoginBackendApplication.class, args);
    }

}
