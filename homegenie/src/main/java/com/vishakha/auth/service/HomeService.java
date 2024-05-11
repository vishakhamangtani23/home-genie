package com.vishakha.auth.service;

import com.vishakha.auth.repository.HomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    public List<Map<String, Object>> fetchAllCategories(int serviceId){
        return homeRepository.fetchAllCategories(serviceId);
    }
    public ResponseEntity<Map<String,Object>> addToCart(Map<String,Object> body)
    {
        Integer userId = null;
        if (body.containsKey("userId") && body.get("userId") != null) {
            userId = Integer.parseInt((String) body.get("userId"));
        }

// Parse productId
        Integer productId = null;
        if (body.containsKey("productId") && body.get("productId") != null) {
            productId = (Integer) body.get("productId");
        }

// Parse serviceId
        Integer serviceId = null;
        if (body.containsKey("serviceId") && body.get("serviceId") != null) {
            serviceId = (Integer) body.get("serviceId");
        }

// Parse quantity
        Integer quantity = null;
        if (body.containsKey("quantity") && body.get("quantity") != null) {
            quantity = (Integer) body.get("quantity");
        }

        int no =  homeRepository.addToCart(userId,productId,serviceId,quantity);
        if(no > 0)
        {
            return ResponseEntity.ok(Map.of("status","successful"));
        }
        return ResponseEntity.badRequest().body(Map.of("status","unsuccessful"));
    }
    public List<Map<String,Object>> fetchCart(Integer userId)
    {
        return homeRepository.fetchCart(userId);
    }

    public Map<String,Object> deleteItemFromCart(Integer cartId)
    {
        return homeRepository.deleteItemFromCart(cartId);
    }

    public List<Map<String,Object>> fetchBookings(Integer userId)
    {
        return homeRepository.fetchBookings(userId);
    }
}
