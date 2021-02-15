package com.example.demo.repository;


import com.example.demo.entity.JobAd;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobAdsRepository extends JpaRepository<JobAd,Long> {

JobAd findById(long id);


}
