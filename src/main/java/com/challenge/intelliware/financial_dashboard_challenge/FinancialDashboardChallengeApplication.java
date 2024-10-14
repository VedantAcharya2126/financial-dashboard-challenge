package com.challenge.intelliware.financial_dashboard_challenge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = "com.example.financialdashboard.controller")
@SpringBootApplication
public class FinancialDashboardChallengeApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinancialDashboardChallengeApplication.class, args);
	}

}
