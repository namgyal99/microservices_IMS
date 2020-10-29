package com.ims.project.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ims.project.model.UserModel;

@Repository
public interface userRepository extends JpaRepository<UserModel, Integer>{



}
