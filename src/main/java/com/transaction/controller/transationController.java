package com.transaction.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;

/**
 * Transaction Controller is responsible for handling HTTP requests
 * related to transaction linked with accounts. It retrieves the transaction
 * data from a JSON file and returns it as a response.
 *
 * Endpoints:
 *  - GET /transaction: Returns account balances in JSON format.
 */
@RestController
public class transationController {
    /**
     * This method handles GET requests to "/transaction".
     * It reads the transaction data from a JSON file and returns it as a string.
     *
     * @return A JSON string containing transaction data or an error message if the file cannot be loaded.
     */
    @GetMapping("/transaction")
    public String getTransactions() {
        try {
            // Load the "transaction.json" file from the classpath.
            ClassPathResource resource = new ClassPathResource("transaction.json");

            // Load the "transaction.json" file from the classpath.
            byte[] jsonData = Files.readAllBytes(resource.getFile().toPath());

            return new String(jsonData);
        } catch (IOException e) {
            // Print stack trace to console if there is an I/O exception.
            e.printStackTrace();
            return "{\"error\": \"Unable to load account data\"}";
        }
    }
}
