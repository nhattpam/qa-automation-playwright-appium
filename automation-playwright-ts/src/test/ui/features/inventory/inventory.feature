@inventory @e2e
Feature: Inventory page functionality

  Background:
    Given I am on the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the inventory page

  Scenario: Inventory page loads successfully
    Then the inventory list should be visible

  Scenario: Add a product to cart
    When I add "Sauce Labs Backpack" to the cart
    Then the cart badge should show 1

  Scenario: Add two products and remove one
    When I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    And I remove "Sauce Labs Backpack" from the cart
    Then the cart badge should show 1

  Scenario: Go to cart from inventory
    When I click the cart icon
    Then I should be redirected to the cart page
