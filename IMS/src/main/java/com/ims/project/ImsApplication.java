package com.ims.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ImsApplication {

	public static void main(String[] args) {
		SpringApplication App = new SpringApplication(ImsApplication.class);
		App.run(args);
	}

}
