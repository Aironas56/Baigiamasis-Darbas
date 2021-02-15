package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Getter
@Setter
public class JobAd {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String name;

    private String Description;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;
}
