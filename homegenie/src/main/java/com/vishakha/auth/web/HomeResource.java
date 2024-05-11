package com.vishakha.auth.web;

import com.vishakha.auth.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(value = "http://localhost:4200", allowCredentials = "true")
@RequestMapping("/api")
public class HomeResource {

    @Autowired
    HomeService homeService;

    @GetMapping("/services")
    public List<Map<String,Object>> fetchAllServices(){
        return homeService.fetchAllServices();
    }

    @GetMapping("/products")
    public List<Map<String,Object>> fetchAllProducts(){
        return homeService.fetchAllProducts();
    }

    @GetMapping("/reviews")
    public List<Map<String,Object>> fetchAllReviews(){
        return homeService.fetchAllReviews();
    }

    @GetMapping("/categories/{serviceId}")
    public List<Map<String,Object>> fetchAllCategories(@PathVariable int serviceId){
        return homeService.fetchAllCategories(serviceId);
    }
}
