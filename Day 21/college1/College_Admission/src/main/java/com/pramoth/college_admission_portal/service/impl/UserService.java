package com.pramoth.college_admission_portal.service.impl;

import java.util.List;

import com.pramoth.college_admission_portal.dto.request.UserRequest;
import com.pramoth.college_admission_portal.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
