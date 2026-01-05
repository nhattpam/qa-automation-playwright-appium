@login @ui
Feature: Login page UI

  Background:
    Given I am on the SauceDemo login page

  Scenario: UI elements are visible on login page
    Then I should see the SauceDemo logo
    And I should see the username input
    And I should see the password input
    And I should see the login button

  Scenario: Placeholder text is correct
    Then the username placeholder should be "Username"
    And the password placeholder should be "Password"

  Scenario: Show error when clicking login without entering credentials
    When I click the login button
    Then I should see an error message containing "Username is required"
