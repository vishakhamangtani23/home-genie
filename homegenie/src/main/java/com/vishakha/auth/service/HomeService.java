package com.vishakha.auth.service;

import com.vishakha.auth.repository.HomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


import java.util.Objects;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
@Service
public class HomeService {
    @Autowired
    HomeRepository homeRepository;
    public static final String ACCOUNT_SID = "ACc0bba02f3872ec9ba66fdc032a4e5d67";
    public static final String AUTH_TOKEN = "96766e02cddad920aa0bfcb6200a850e";
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

    public ResponseEntity<Map<String,Object>> insertBookings( Map<String,Object> body)
    {
        System.out.println(body);
        int  userId = Integer.parseInt((String) body.get("userId"));
//        int productId = Integer.parseInt((String)body.get("productId"));
        String location = (String)body.get("location");
        String address = (String) body.get("address");
        String time_slot = (String) body.get("time_slot");
        String date=(String) body.get("date");
//        int category_id=Integer.parseInt((String) body.get("category_id"));

        int noOfRows  = homeRepository.insertBookings(userId,location,address,time_slot,date);
        if(noOfRows >0)
        {
            sendWhatsappMessage();
            return ResponseEntity.ok(Map.of("status","successful"));
        }
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("status","Unsuccessful"));
    }

    public void sendWhatsappMessage() {
        System.out.println("sending whatsapp message");
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Message message = Message.creator(
                        new com.twilio.type.PhoneNumber("whatsapp:+919359697403"),
                        new com.twilio.type.PhoneNumber("whatsapp:+14155238886"),
                        "Hey!  thankyou for shopping on homegenie"
                )
                .create();

        System.out.println(message.getSid() + " " + message.getStatus());

    }
    public List<Map<String,Object>> fetchAllBookings()
    {
        return homeRepository.fetchAllBookings();
    }
}
