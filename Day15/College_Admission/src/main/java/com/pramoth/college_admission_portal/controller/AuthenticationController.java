package com.pramoth.college_admission_portal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pramoth.college_admission_portal.constant.*;
import com.pramoth.college_admission_portal.dto.request.AuthenticationRequest;
import com.pramoth.college_admission_portal.dto.request.RegisterRequest;
import com.pramoth.college_admission_portal.dto.response.AuthenticationResponse;
import com.pramoth.college_admission_portal.service.impl.AuthService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        boolean isRegistered = authService.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("Sommething went wrong!");
    }

    @PostMapping("/login")
    public ResponseEntity<Object> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authService.userAuthentication(request));
    }
}
