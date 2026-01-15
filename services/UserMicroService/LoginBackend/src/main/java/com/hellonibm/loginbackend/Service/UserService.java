package com.hellonibm.loginbackend.Service;

import com.hellonibm.loginbackend.Dto.LoginDTO;
import com.hellonibm.loginbackend.Dto.UserDTO;
import com.hellonibm.loginbackend.response.LoginResponse;

public interface UserService {

    String addUser(UserDTO userDTO);

    LoginResponse loginUser(LoginDTO loginDTO);

    String deleteUserByEmail(String email);

}
