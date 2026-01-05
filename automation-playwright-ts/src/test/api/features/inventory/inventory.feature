@inventory @api
Feature: Inventory API
  Scenario: Get inventory list
    When I request the inventory list
    Then the response status should be 200
    And the response body should have property "products"
    And the response header "content-type" should contain "application/json"
