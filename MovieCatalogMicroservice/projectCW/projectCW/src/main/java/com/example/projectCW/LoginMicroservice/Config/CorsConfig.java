package com.example.projectCW.LoginMicroservice.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/log/login/userlog")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("POST");

                registry.addMapping("/log/register/user")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("POST");
            }
        };
    }
}