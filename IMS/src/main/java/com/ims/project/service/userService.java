package com.ims.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ims.project.model.UserModel;
import com.ims.project.repository.userRepository;

@Service
public class userService {
	@Autowired
	private userRepository user_repo;
	
	public Object SaveUser(UserModel usermodel) {
		return user_repo.save(usermodel);
	}
	
	public List<UserModel> getAllUser() {
		List<UserModel> usermodel = new ArrayList<>();
		user_repo.findAll().forEach(usermodel::add);
		return usermodel;
	}
}
