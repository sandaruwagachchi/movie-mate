package com.example.projectCW.LoginMicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"com.example.projectCW.LoginMicroservice.data"})
@EnableJpaRepositories(basePackages = {"com.example.projectCW.LoginMicroservice.data"})
@PropertySource("classpath:application-login.properties")
public class LoginMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginMicroserviceApplication.class, args);
	}
}