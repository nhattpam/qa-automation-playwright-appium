@cart @api
Feature: Cart API
  Scenario: Add product to cart
    Given I have a product with id 1
    When I add the product to the cart
    Then the response status should be 201
    And the response body should have property "id"
    And the response header "content-type" should contain "application/json"
