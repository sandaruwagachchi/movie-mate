package com.example.projectCW.AdminMicroService.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface moviedeleteRepository extends JpaRepository<moviedelete, Long> {


    void deleteByName(String name);
}