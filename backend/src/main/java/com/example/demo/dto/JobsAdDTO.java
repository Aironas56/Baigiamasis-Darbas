package com.example.demo.dto;
import com.example.demo.entity.Company;
import com.example.demo.entity.JobAd;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class JobsAdDTO {
    private Long id;

    private String name;

    private String Description;

    private Company company;

    public JobsAdDTO(JobAd jobAd) {
        this.id = jobAd.getId();
        this.name = jobAd.getName();
        this.Description = jobAd.getDescription();
        this.company = jobAd.getCompany();
    }
}
