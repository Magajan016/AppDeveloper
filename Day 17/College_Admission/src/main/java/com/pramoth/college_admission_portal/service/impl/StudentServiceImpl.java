package com.pramoth.college_admission_portal.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.pramoth.college_admission_portal.dto.request.StudentRequest;
import com.pramoth.college_admission_portal.dto.response.StudentResponse;
import com.pramoth.college_admission_portal.model.Student;
import com.pramoth.college_admission_portal.model.enumerate.Role;
import com.pramoth.college_admission_portal.repository.StudentRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
@Service
@Transactional
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService{
    private final StudentRepo studentRepo;

    @Override
    public StudentResponse getStudent(Long sid) {
        Student student = studentRepo.findBySid(sid);
        return mapStudentToStudentResponse(student);   
    }

    @Override
    public List<StudentResponse> getAllStudents() {
          List<Student> studentList = studentRepo.findAll();
          return studentList.stream()
                 .map(this::mapStudentToStudentResponse)
                 .collect(Collectors.toList());
    }

    private StudentResponse mapStudentToStudentResponse(Student student){
        return StudentResponse.builder()
               .sid(student.getSid())
               .firstName(student.getFirstName())
               .lastName(student.getLastName())
               .DateOfBirth(student.getDateOfBirth())
               .Gender(student.getGender())
               .email(student.getEmail())
               .phonenumber(student.getPhonenumber())
               .Address(student.getAddress())
               .Citizen(student.getCitizen())
               .HighSchool(student.getHighSchool())
               .role(student.getRole())
               .build();
    }



    @Override
    public String postStudent(Student request) {
        //  Optional<Student> isStudentExist = studentRepo.findByEmail(request.getEmail());
        String isStudentExist = studentRepo.findByEmail(request.getEmail());
        //  if(!isStudentExist.isPresent()){
            // var student = Student.builder()
            //             .firstName(request.getFirstName())
            //             .lastName(request.getLastName())
            //             .DateOfBirth(request.getDateOfBirth())
            //             .Gender(request.getGender())
            //             .email(request.getEmail())
            //             .phonenumber(request.getPhonenumber())
            //             .Address(request.getAddress())
            //             .Citizen(request.getCitizen())
            //             .HighSchool(request.getHighSchool())
            //             .role(Role.valueOf(request.getRole().toUpperCase()))
            //             .build();
                //    studentRepo.save(request);
            // }

        //  else{
        //     return false;
        //  }
        return isStudentExist;
    }

    @Override
    public boolean updateStudent(StudentRequest student1, Long sid) {
         return true;
    }

    @Override
    public boolean deleteStudent(StudentRequest student, Long sid) {
           Student student1 = studentRepo.findBySid(sid);
           if(student1!=null){
             studentRepo.deleteById(sid);
             return true;
           }
           else{
            return false;
           }
    }

    
}
