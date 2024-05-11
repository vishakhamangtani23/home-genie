package com.vishakha.auth.web;

import com.vishakha.auth.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    @PostMapping("/add-to-cart")
    public ResponseEntity<Map<String,Object>> addToCart(@RequestBody Map<String,Object> body)
    {
        return homeService.addToCart(body);
    }
    @GetMapping("/cart/{userId}")
    public List<Map<String,Object>> fetchCart(@PathVariable Integer userId)
    {
        return homeService.fetchCart(userId);
    }

    @PostMapping("/delete/{cartId}")
    public Map<String,Object> deleteItemFromCart(@PathVariable Integer cartId)
    {
        return homeService.deleteItemFromCart(cartId);
    }

}
