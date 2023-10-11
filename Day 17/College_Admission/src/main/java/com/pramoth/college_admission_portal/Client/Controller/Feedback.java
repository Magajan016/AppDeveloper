package com.pramoth.college_admission_portal.Client.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pramoth.college_admission_portal.Client.Service.FeedbackSer;
import com.pramoth.college_admission_portal.constant.Api;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
@RestController
@RequestMapping(Api.ADMIN)
public class Feedback {
    @Autowired
    private FeedbackSer feedbackSer;
     @GetMapping("/getAll")
     public ResponseEntity<Feedback> getFeedback() {
             return feedbackSer.getAllFeedback();

     }
     @PostMapping("/postFeed")
     public ResponseEntity<Feedback> postFeed(@RequestBody Feedback feed){
        return feedbackSer.postFeed(feed);
     }
}
