package com.example.financialdashboard.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.nio.file.Files;


/**
 * FinancialController is responsible for handling HTTP requests
 * related to financial account balances. It retrieves the account
 * balance data from a JSON file and returns it as a response.
 *
 * Endpoints:
 *  - GET /balances: Returns account balances in JSON format.
 */
@RestController
public class FinancialController {
    /**
     * Handles GET requests for /balances and returns the account balance data.
     *
     * @return A JSON string containing account balances or an error message if data cannot be loaded.
     */
    @GetMapping("/balances")
    public String getBalances() {
        try {
            // Load the balances.json file from the classpath
            ClassPathResource resource = new ClassPathResource("balances.json");

            // Read the file contents as bytes and convert to a string
            byte[] jsonData = Files.readAllBytes(resource.getFile().toPath());

            // Return the JSON data as a string
            return new String(jsonData);
        } catch (IOException e) {
            e.printStackTrace();
            // If an error occurs, return an error message in JSON format
            return "{\"error\": \"Unable to load account data\"}";
        }
    }
}
