package com.example.projectCW.LoginMicroservice.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface loginRepository extends JpaRepository<register, Long> {
    Optional<register> findByEmailAndPassword(String email, String password);
}