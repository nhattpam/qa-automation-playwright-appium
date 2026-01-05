@login @api
Feature: Authentication API
  Scenario: User login successfully
    Given I loginn with username "emilys" and password "emilyspass"
    Then the response status should be 200
    And the response body should have property "accessToken"
    And the response header "content-type" should contain "application/json"
