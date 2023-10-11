package com.pramoth.college_admission_portal.service.impl;

import java.util.List;

import com.pramoth.college_admission_portal.dto.request.StudentRequest;
import com.pramoth.college_admission_portal.dto.response.StudentResponse;
import com.pramoth.college_admission_portal.model.Student;

public interface StudentService {

    StudentResponse getStudent(Long sid);

    List<StudentResponse> getAllStudents();

    String postStudent(Student request);

    boolean updateStudent(StudentRequest student1, Long sid);

    boolean deleteStudent(StudentRequest student, Long sid);

}
