package com.pramoth.college_admission_portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pramoth.college_admission_portal.model.Student;
import java.util.List;
import java.util.Optional;


public interface StudentRepo extends JpaRepository<Student,Long>{
   Student findBySid(Long sid);

String findByEmail(String email);
// Optional<Student> findByEmail(String email);
}