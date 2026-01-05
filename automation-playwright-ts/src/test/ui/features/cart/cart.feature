@cart @e2e
Feature: Cart functionality

  Background:
    Given I am on the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the inventory page
    And I add "Sauce Labs Backpack" to the cart
    And I click the cart icon
    Then I should be redirected to the cart page

  Scenario: Product appears in the cart
    Then the cart should contain "Sauce Labs Backpack"

  Scenario: Remove product from the cart
    When I remove "Sauce Labs Backpack" from the cart in cart page
    Then the cart should not contain "Sauce Labs Backpack"

  Scenario: Proceed to checkout
    When I click the checkout button
    Then I should be redirected to the checkout page
