package com.vishakha.auth.repository;

import org.springframework.beans.factory.annotation.Autowired;
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
}
