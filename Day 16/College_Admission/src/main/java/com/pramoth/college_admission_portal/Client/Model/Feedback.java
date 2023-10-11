package com.pramoth.college_admission_portal.Client.Model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@Table(name="feedback")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long fid;
    private String uname;
    private String uemail;
    private String question;
    private String answer;
    private Date createdAt;
    @PrePersist
    protected void onCreate(){
        createdAt = new Date();
    } 

    
}
