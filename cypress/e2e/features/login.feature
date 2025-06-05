Feature: To Check login scenario using Cypress

  Scenario: Login to the given Website
    Given User navigates to "https://magento.softwaretestingboard.com/" webpage
    When User navigates to create account page
    Then User enters first name as "Test", last name as "User"
    Then User enters email as "testuser12345755245@gmail.com", password as "testuser!12" and creates an account
    Then User does logout and navigates to login page
    Then User logins with email as "testuser12345755245@gmail.com" and password as "testuser!12"