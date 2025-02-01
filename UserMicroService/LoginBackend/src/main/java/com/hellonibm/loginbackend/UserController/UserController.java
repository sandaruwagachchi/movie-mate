package com.hellonibm.loginbackend.UserController;


import com.hellonibm.loginbackend.Dto.UserDTO;
import com.hellonibm.loginbackend.Dto.LoginDTO;
import com.hellonibm.loginbackend.Service.UserService;
import com.hellonibm.loginbackend.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")


public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping (path = "/save")
    public String saveUser(@RequestBody UserDTO userDTO)
    {
        String id = userService.addUser(userDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @DeleteMapping(path = "/delete")
    public ResponseEntity<?> deleteUser(@RequestParam String email) {
        String result = userService.deleteUserByEmail(email);
        if ("User deleted".equals(result)) {
            return ResponseEntity.ok("User deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("User not found.");
        }
    }

}
