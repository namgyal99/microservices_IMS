package com.ims.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ims.project.model.UserModel;
import com.ims.project.repository.userRepository;
import com.ims.project.service.userService;

@RestController
@RequestMapping("")
public class MainController {
	@Autowired
	private userService userservice;
	@Autowired
	private userRepository user_repo;
	
    @PostMapping("/saveUser")
    public Object saveUser(@RequestBody UserModel usermodel) {
    	 return userservice.SaveUser(usermodel);
    }
    
    @GetMapping("/getUser")
    public List<UserModel> getAllUser(){
    	return userservice.getAllUser();
    }
    
    @PutMapping("/updateUser")//@PathVariable("id") long id,
    public UserModel updateUser (@RequestBody UserModel usermodel) {
    	return user_repo.save(usermodel);
    }
}
