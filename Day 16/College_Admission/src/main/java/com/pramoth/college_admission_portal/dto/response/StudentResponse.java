package com.pramoth.college_admission_portal.dto.response;

import java.util.Date;

import com.pramoth.college_admission_portal.model.enumerate.Role;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class StudentResponse {
    private Long sid;
    private String firstName;
    private String lastName;
    private String DateOfBirth;
    private String Gender;
    private String email;
    private String phonenumber;
    private String Address;
    private String Citizen;
    private String HighSchool;
    private Role role;
   
    
}
