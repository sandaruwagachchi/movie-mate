package com.example.projectCW.AdminMicroService.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface movieaddRepository extends JpaRepository<movieadd, Long> {
}