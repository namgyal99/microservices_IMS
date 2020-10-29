package com.ims.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ims.project.model.CategoryModel;
import com.ims.project.repository.CategoryRepository;

@Service
public class CategoryService {
	@Autowired
	private CategoryRepository categoryRepository;
	
	public Object SaveCategory(CategoryModel categoryModel) {
		return categoryRepository.save(categoryModel);
	}
	
	public List<CategoryModel> getAllCategory(){
		List<CategoryModel> categoryModel = new ArrayList<>();
		categoryRepository.findAll().forEach(categoryModel::add);
		return categoryModel;
	}
	
    public Object updateCategory(CategoryModel categoryModel) {

        return categoryRepository.save(categoryModel);
    }

    public void deleteCategory(CategoryModel categoryModel) {

        categoryRepository.delete(categoryModel);
    }

}
