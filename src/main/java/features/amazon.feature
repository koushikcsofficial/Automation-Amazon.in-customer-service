Feature: Amazon Customer Service validation


  Scenario: Upto Pay on Delivery from customer service
    Given User is on Amazon Home page
    When User Clicks on Customer Service
    And User Hover on payment pricing
    Then User should see Payments & Pricing
    

  Scenario Outline: Validate all the option from Payment & Pricing
    Given User can see Browse Help Topics in the site
    When User clicks on a <item> from the list
    Then verify correct  "<headline>" is shown

    Examples: 
      | item | headline |
      | 2 | About Pay on Delivery |
      | 3 | EMI (Easy Installments) |
      
  Scenario: Task Completion
    Given User is on Customer service page
    Then Browser is closed
