@inventory @ui
Feature: Inventory page UI

  Background:
    Given I am on the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the inventory page

  Scenario: Verify product list is visible
    Then the inventory list should be visible

  Scenario: Verify product card elements
    Then each product card should show a name, description, price and Add to cart button

  Scenario: Verify shopping cart icon
    Then the shopping cart icon should be visible
