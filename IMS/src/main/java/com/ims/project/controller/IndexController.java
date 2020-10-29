package com.ims.project.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class IndexController {
	@RequestMapping("/")
	  public String home() {
	        return "index.html";
	    }
}
