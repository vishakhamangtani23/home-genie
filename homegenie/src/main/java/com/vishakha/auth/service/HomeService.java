package com.vishakha.auth.service;

import com.vishakha.auth.repository.HomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class HomeService {
    @Autowired
    HomeRepository homeRepository;

    public List<Map<String, Object>> fetchAllServices(){
        return homeRepository.fetchAllServices();
    }
    public List<Map<String, Object>> fetchAllProducts(){
        return homeRepository.fetchAllProducts();
    }
    public List<Map<String, Object>> fetchAllReviews(){
        return homeRepository.fetchAllReviews();
    }
}
