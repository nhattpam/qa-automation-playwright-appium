@cart @ui
Feature: Cart page UI

  Background:
    Given I am on the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the inventory page
    And I add "Sauce Labs Backpack" to the cart
    And I click the cart icon
    Then I should be redirected to the cart page

  Scenario: Cart page elements are visible
    Then the cart title should be visible
    And the cart item should show name, price, description and quantity
    And the checkout button should be visible
