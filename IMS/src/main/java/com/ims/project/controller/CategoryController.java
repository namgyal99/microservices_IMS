package com.ims.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ims.project.model.CategoryModel;
import com.ims.project.service.CategoryService;

@RestController
@RequestMapping("")
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("/getCategory")
	public List<CategoryModel> getAllCategory(){
		return categoryService.getAllCategory();
	}
	
	@PostMapping("/saveCategory")
	public Object saveCategory(@RequestBody CategoryModel categoryModel) {
		return categoryService.SaveCategory(categoryModel);
	}
	
	@PutMapping("/updateCategory")
	public Object updateCategory (@RequestBody CategoryModel categoryModel) {
		return categoryService.updateCategory(categoryModel);
	}
	
	@DeleteMapping("/deleteCategory")
	public void deleteCategory (@RequestBody CategoryModel categoryModel) {
		 categoryService.deleteCategory(categoryModel);
	}

}
