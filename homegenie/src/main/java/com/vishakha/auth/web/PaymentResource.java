package com.vishakha.auth.web;


import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import jakarta.annotation.Resource;
//import org.apache.catalina.Group;
import org.apache.catalina.User;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
@Resource
public class PaymentResource {
    @Value("${razorpay.api.key}")
    String apiKey;

    @Value("${razorpay.api.secret}")
    String apiSecret;



    @PostMapping("/payments")
    public Map<String,String> createPaymentLink(@RequestBody Map<String , Object> body ) throws RazorpayException {
//        User user= (User) userService.findGroupById(groupId);
        System.out.println(body);
        try{
            System.out.println("Successfull");
            RazorpayClient razorpay=new RazorpayClient(apiKey,apiSecret);
            int amount = (int)body.get("total");
            amount = amount*100;
            JSONObject paymentLinkRequest=new JSONObject();
            paymentLinkRequest.put("amount",amount);
            paymentLinkRequest.put("currency","INR");
            System.out.println(paymentLinkRequest);

            JSONObject customer=new JSONObject();
            customer.put("name",body.get("username"));
            customer.put("email",body.get("email"));
            System.out.println(customer);

            JSONObject notify=new JSONObject();
            notify.put("sms",true);
            customer.put("email",true);
            paymentLinkRequest.put("notify",notify);
            paymentLinkRequest.put("callback_url","http://localhost:4200/payment ");
            paymentLinkRequest.put("callback_method","get");
            System.out.println(notify);

            PaymentLink payment=razorpay.paymentLink.create(paymentLinkRequest);

//            String paymentLinkId=payment.get("id");
//            String paymentLinkUrl=payment.get("short_url");

//            PaymentLinkResponse res=new PaymentLinkResponse();
//            res.setPayment_link_id(paymentLinkId);
//            res.setPayment_link_url(paymentLinkUrl);
//
//            return new ResponseEntity<PaymentLinkResponse>(res, HttpStatus.CREATED)
            System.out.println(payment);
            Map<String,String> res=new HashMap<>();
            res.put("paymentLinkId",payment.get("id").toString());
            res.put("paymentLinkUrl",payment.get("short_url").toString());
            return  res;
        }catch (Exception e){
            throw new RazorpayException(e.getMessage());
        }
    }
//    public ResponseEntity<ApiResponse>redirect(@RequestParam(name="payment_id")String paymentId,@RequestParam(name="group_id")Long groupId) throws RazorpayException {
//        User user= (User) userService.findGroupById(groupId);
//        RazorpayClient razorpay=new RazorpayClient(apiKey,apiSecret);
//        try{
//            Payment payment=razorpay.payments.fetch(paymentId);
//            if(payment.get("status").equals("captured")){
//
//            }
//        }catch(Exception e){
//
//        }
//        return null;
//    }
}


