package com.pramoth.college_admission_portal.controller;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pramoth.college_admission_portal.constant.Api;
import com.pramoth.college_admission_portal.dto.request.StudentRequest;
import com.pramoth.college_admission_portal.dto.response.StudentResponse;
import com.pramoth.college_admission_portal.model.Student;
import com.pramoth.college_admission_portal.service.impl.StudentService;
// import com.pramoth.college_admission_portal.service.impl.StudentServiceImpl;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
@RestController
@RequestMapping(Api.ADMIN)
@RequiredArgsConstructor 
@Tag(name = "Student")
public class StudentController {
    private final StudentService studentService;

    @GetMapping("/hi")
    public String index(){
        return "Hii";
    }
    @GetMapping(value="/get")
    public ResponseEntity<StudentResponse> getStudent( @RequestParam Long sid) {
        StudentResponse studentResponse = studentService.getStudent(sid);
        return studentResponse!=null ? ResponseEntity.ok().body(studentResponse):ResponseEntity.notFound().build();
    }
    @GetMapping("/getAllStudent")
    public ResponseEntity<List<StudentResponse>> getAllStudent(){
         List<StudentResponse> studentList = studentService.getAllStudents();
         return studentList.isEmpty() ? ResponseEntity.ok().body(studentList) : ResponseEntity.noContent().build();
    }
    @PostMapping("/post")
    public String postStudent(@RequestBody Student student){
        return studentService.postStudent(student);

        // return isStudentDetailsSaved ? ResponseEntity.ok().body("Student Details Saved Successfully") : ResponseEntity.badRequest().body("Something went wrong");
    }
    @PutMapping("/update")
    public ResponseEntity<String> updateStudent(@RequestBody StudentRequest student1,@RequestParam Long sid) {
        boolean isStudentUpdated = studentService.updateStudent(student1,sid);
        return isStudentUpdated ? ResponseEntity.ok().body("Successfully updated Student Details") : ResponseEntity.badRequest().body("Something went wrong");
    }
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteStudent(@RequestBody StudentRequest student,@RequestParam Long sid){
        boolean isStudentDeleted = studentService.deleteStudent(student,sid);
        return isStudentDeleted ? ResponseEntity.ok().body("Successfully student removed") : ResponseEntity.badRequest().body("Student doesn't exist");
    }   
}
