package com.example.projectCW.LoginMicroservice.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface registerRepository extends JpaRepository<register, Long> {
}
