package com.vishakha.auth.service;

import com.vishakha.auth.repository.UserRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDate;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {
//    @username VARCHAR(100),
//    @password VARBINARY (MAX),
//    @email VARCHAR(200) ,
//    @fullname VARCHAR(200),
//    @mobile VARCHAR(20)
    @Autowired
    UserRepository userRepository;
    @Autowired
    JavaMailSender javaMailSender;
    public ResponseEntity<Map<String,Object>> registerUser( Map<String,Object> body)
    {
        String username = (String)body.get("username");
        String password = (String)body.get("password");
        String email = (String)body.get("email");
        String fullname = (String) body.get("fullname");
        String mobile = (String) body.get("mobile");

        int noOfRows  = userRepository.registerUser(fullname,username,email,password,mobile);
        if(noOfRows >0)
        {
            return ResponseEntity.ok(Map.of("status","successful"));
        }
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("status","Unsuccessful"));

    }
    public Map<String,Object> loginUser( Map<String,Object> body)
    {
        String username = (String)body.get("username");
        String password = (String)body.get("password");
        return userRepository.loginUser(username,password);

//        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("status","Unsuccessful"));
    }
    public ResponseEntity<List<String>> getStudentNames(HttpServletRequest httpServletRequest)
    {

        boolean isValid = isValidToken(httpServletRequest);
        System.out.println(isValid + " isValid");
        if(isValid) {
            return ResponseEntity.ok(List.of("Hii", "Hello", "Bye"));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.emptyList());
    }
    private Map<String,String > getCookiesAsHashMap(Cookie[] cookies)
    {
        Map<String , String> cookieMap = new HashMap<>();
        System.out.println(cookies);
        for(Cookie c : cookies)
        {
            cookieMap.put(c.getName() , c.getValue());
        }
        return  cookieMap;
    }
    public boolean isValidToken(HttpServletRequest httpServletRequest)
    {
        Cookie [] cookies = httpServletRequest.getCookies();
        if(cookies==null)
        {
            return false;
        }
        Map<String , String> cookieMap = getCookiesAsHashMap(cookies);

        Map<String , Object> result = userRepository.isValidToken(Integer.parseInt(cookieMap.get("userid")) , cookieMap.get("token"));
        Integer isValid = (Integer) result.get("validYN");
        return isValid == 1;
    }
    public void validateAndSendMail(Map<String , Object> body)
    {
        String email = (String) body.get("email");
        if(validateEmail(email))
        {
            String token = generateToken(email);
            String link = generateLink(token);
            sendMail(email , link );
        }
        else
        {
            System.out.println("Invalid Email");
        }
//        1 validateemail
//        2 token
//        3 send mail


    }
    public boolean validateEmail(String email)
    {
        Map<String , Object> res = userRepository.validateEmail(email);
        Integer isValid = (Integer) res.get("validYN");
        return isValid == 1;
    }
    public String generateToken(String email)
    {
        Map <String , Object >res = userRepository.generateToken(email);
        String token = (String) res.get("GeneratedToken");
        return token;
    }
    public String generateLink(String token)
    {
        return "http://localhost:4200/reset/"+token;
    }
    public void sendMail(String email , String link)
    {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
        try
        {
            mimeMessageHelper.setSubject("forgot ");
            mimeMessageHelper.setTo(email);
            mimeMessageHelper.setText("Click on the link to reset your password "+link);
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        javaMailSender.send(mimeMessage);
    }
    public ResponseEntity<Map<String,Object>> validateFPToken(Map<String,Object> body)
    {
        String token = (String) body.get("token");
        Map<String,Object> res = userRepository.validateFPToken(token);
        Integer isValid = (Integer) res.get("validYN");
        if(isValid == 1)
        {
            return ResponseEntity.ok(Map.of("status","successful"));
        }
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("status","Unsuccessful"));
    }
    public Map<String,Object> fetchUser(Integer userId)
    {
        return userRepository.fetchUser(userId);
    }
    public void addWork(Map<String,Object> body)
    {
     String email = (String) body.get("email");
     String username = (String) body.get("username");

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
        try
        {
            String subject = "Regarding Your Job Application";
            String emailContent = "<p>Dear "+username+"</p>" +
                    "<p>We hope this email finds you well.</p>" +
                    "<p>Thank you for applying for the [Position Name] position at [Company Name]. We appreciate your interest in joining our team.</p>" +
                    "<p>We are currently reviewing all applications, and we will contact you if your qualifications match our requirements. In the meantime, please feel free to reach out if you have any questions or require further information.</p>";

            mimeMessageHelper.setSubject(subject);
            mimeMessageHelper.setTo(email);
            mimeMessageHelper.setText(emailContent, true); // Set the email content as HTML

        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        javaMailSender.send(mimeMessage);
//        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("status","Unsuccessful"));
    }

    @Scheduled(cron = "3 * * * * *") // Execute at 3:00 AM every Monday
    public void sendWelcomeEmails() {
        System.out.println("Current time is :: " + LocalDate.now());
        List<Map<String,Object>> emails = userRepository.getEmails();
        for(Map<String,Object> email : emails) {
            String recipientEmail = (String) email.get("email");
            sendWelcomeEmail(recipientEmail, "http://localhost:4200");
        }
    }

    /**
     * Sends a welcome email to the specified email address.
     *
     * @param email The recipient's email address.
     * @param link The link to include in the email.
     */
    public void sendWelcomeEmail(String email, String link) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, "UTF-8");
        try {
            mimeMessageHelper.setSubject("Welcome to Our Expense Tracker!");
            mimeMessageHelper.setTo(email);

            // HTML content for the email body
            String htmlContent = "<html>" +
                    "<body style=\"font-family: Arial, sans-serif;\">" +
                    "<h2>Welcome to Our HomeGenie</h2>" +
                    "<p>We're excited to have you on board.</p>" +
                    "<p>To start managing your expenses and budgets, click the button below:</p>" +
                    "<p><a href=\"" + link + "\" style=\"display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;\">Go to Expense Tracker</a></p>" +
                    "<p>If you have any questions or need assistance, feel free to contact us.</p>" +
                    "<p>Thank you!</p>" +
                    "</body>" +
                    "</html>";

            mimeMessageHelper.setText(htmlContent, true); // Set the HTML content
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        javaMailSender.send(mimeMessage);
        System.out.println("Email sent to :: " + email);
    }




}
