package com.example.demo.service;

import com.example.demo.dto.JobsAdDTO;
import com.example.demo.entity.JobAd;
import com.example.demo.mapper.JobAdsMapper;
import com.example.demo.repository.JobAdsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobsAdService {
    private JobAdsRepository jobAdRepository;
    private JobAdsMapper jobAdMapper;

    public JobsAdService(JobAdsRepository jobAdRepository, JobAdsMapper jobAdMapper) {
        this.jobAdRepository = jobAdRepository;
        this.jobAdMapper = jobAdMapper;
    }

    public List<JobsAdDTO> getAllJobs() {
        return jobAdRepository.findAll()
                .stream()
                .map(e -> jobAdMapper.convertJobAdToDTO(e))
                .collect(Collectors.toList());
    }
    public JobsAdDTO createJob(JobsAdDTO jobsAdDTO){
        JobAd jobAd = jobAdMapper.convertJobAdToDtoToEntity(jobsAdDTO);
        JobAd savedJob = jobAdRepository.save(jobAd);
        jobsAdDTO.setId(savedJob.getId());
        return jobsAdDTO;
    }
    public JobsAdDTO getSingleJob ( long id) {
        JobAd jobad = getById(id);
        return jobAdMapper.convertJobAdToDTO(jobad);

    }

    private JobAd getById(long id) {
        return jobAdRepository.findById(id);
    }
}
