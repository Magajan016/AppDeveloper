package com.pramoth.college_admission_portal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
// import io.swagger.v3.oas.annotations.tags.Tag;

@OpenAPIDefinition(
		info =@Info(
				title = "College Admission",
				version = "1.1.2",
				description = "",
				contact = @Contact(
						name = "Pramoth Magajan",
						email = "magajan@gmail.com"
						)
				)
		)

// // @Tag(name="", description=""){Controller}
@SpringBootApplication
public class CollegeAdmissionApplication {

	public static void main(String[] args) {
		SpringApplication.run(CollegeAdmissionApplication.class, args);
	}

}
