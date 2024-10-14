package com.example.financialdashboard.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.nio.file.Files;

@RestController
public class FinancialController {

    @GetMapping("/balances")
    public String getBalances() {
        try {
            ClassPathResource resource = new ClassPathResource("balances.json");
            byte[] jsonData = Files.readAllBytes(resource.getFile().toPath());
            return new String(jsonData);
        } catch (IOException e) {
//            e.printStackTrace();
            return "{\"error\": \"Unable to load account data\"}";
        }
//        return "This is financial controller";
    }
}
