package com.example.demo.controller;

import com.example.demo.dto.JobsAdDTO;
import com.example.demo.service.JobsAdService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/ad")
public class JobAdController {

    private JobsAdService jobsAdService;

    public JobAdController(JobsAdService jobsAdService) {
        this.jobsAdService = jobsAdService;
    }

    @GetMapping
    public List<JobsAdDTO> getAllJobs(){
        return jobsAdService.getAllJobs();
    }
    @GetMapping("/{id}")
    public JobsAdDTO getJob(@PathVariable long id) {
        return jobsAdService.getSingleJob(id);
    }

    @PostMapping
    public ResponseEntity<JobsAdDTO> addJobAd (@RequestBody JobsAdDTO jobsAdDTO ){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(jobsAdService.createJob(jobsAdDTO));
    }


}
