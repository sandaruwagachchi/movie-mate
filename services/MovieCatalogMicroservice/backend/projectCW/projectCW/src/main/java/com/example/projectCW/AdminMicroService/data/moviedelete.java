package com.example.projectCW.AdminMicroService.data;

import jakarta.persistence.*;

@Entity
@Table(name = "movie")
public class moviedelete {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    @Column(name = "name")
    private String name;

    // Constructors, Getters, and Setters

    public moviedelete() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}