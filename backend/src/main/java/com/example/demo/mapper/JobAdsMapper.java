package com.example.demo.mapper;
import com.example.demo.dto.JobsAdDTO;
import com.example.demo.entity.JobAd;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class JobAdsMapper {
    public JobsAdDTO convertJobAdToDTO(JobAd jobAd) {
        JobsAdDTO jobAdDto = new JobsAdDTO();
        jobAdDto.setId(jobAd.getId());
        jobAdDto.setName(jobAd.getName());
        jobAdDto.setDescription(jobAd.getDescription());
        jobAdDto.setCompany(jobAd.getCompany());
        return jobAdDto;
    }
    public JobAd convertJobAdToDtoToEntity(JobsAdDTO jobsAdDTO) {
        JobAd jobAd = new JobAd();
        BeanUtils.copyProperties(jobsAdDTO,jobAd);
        return jobAd;
    }

}