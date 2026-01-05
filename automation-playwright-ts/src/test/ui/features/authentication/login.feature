@login @e2e
Feature: Login functionality

  Background:
    Given I am on the SauceDemo login page

  Scenario: Successful login with standard user
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the inventory page

  Scenario: Login with locked out user should fail
    When I login with username "locked_out_user" and password "secret_sauce"
    Then I should see an error message containing "locked out"

  Scenario: Login with invalid credentials
    When I login with username "invalid_user" and password "wrong_password"
    Then I should see an error message containing "Username and password do not match"
