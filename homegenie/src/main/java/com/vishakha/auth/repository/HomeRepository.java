package com.vishakha.auth.repository;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class HomeRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Map<String, Object>> fetchAllServices() {
        return jdbcTemplate.queryForList("EXEC homeGenie.sp_fetch_services");
    }
    public List<Map<String, Object>> fetchAllProducts() {
        return jdbcTemplate.queryForList("EXEC homeGenie.sp_fetch_products");
    }
    public List<Map<String, Object>> fetchAllReviews() {
        return jdbcTemplate.queryForList("EXEC homeGenie.sp_fetch_review");
    }

    public List<Map<String, Object>> fetchAllCategories(int serviceId) {
        return jdbcTemplate.queryForList("EXEC homeGenie.sp_fetch_categories ?",serviceId);
    }
    public int addToCart(Integer userId, Integer productId, Integer serviceId, Integer quantity) {
        return jdbcTemplate.update("EXEC homeGenie.addToCart ?,?,?,?", userId,serviceId,productId, quantity);
    }
    public List<Map<String,Object>> fetchCart(Integer userId) {
        return jdbcTemplate.queryForList("EXEC homeGenie.fetchCart ?", userId);
    }
    public Map<String,Object> deleteItemFromCart(int cartId){
        return jdbcTemplate.queryForMap("EXEC homeGenie.delete_cart_item ?",cartId);
    }

    public List<Map<String,Object>> fetchBookings(int userId) {
        return jdbcTemplate.queryForList("EXEC homeGenie.fetch_bookings ?", userId);
    }
    public List<Map<String,Object>> fetchAllBookings()
    {
        return jdbcTemplate.queryForList("EXEC homeGenie.fetch_all_bookings");
    }

}
