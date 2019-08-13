$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/java Automation/BDDframework/src/main/java/features/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Customer Service validation",
  "description": "",
  "id": "amazon-customer-service-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Upto Pay on Delivery from customer service",
  "description": "",
  "id": "amazon-customer-service-validation;upto-pay-on-delivery-from-customer-service",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Amazon Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on Customer Service",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Hover on payment pricing",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should see Payments \u0026 Pricing",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.user_is_on_Amazon_Home_page()"
});
formatter.result({
  "duration": 24075696700,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.user_Clicks_on_Customer_Service()"
});
formatter.result({
  "duration": 6994598300,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.user_Hover_on_payment_pricing()"
});
formatter.result({
  "duration": 1183110200,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.user_should_see_Payments_Pricing()"
});
formatter.result({
  "duration": 37419000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Validate all the option from Payment \u0026 Pricing",
  "description": "",
  "id": "amazon-customer-service-validation;validate-all-the-option-from-payment-\u0026-pricing",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User can see Browse Help Topics in the site",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on a \u003citem\u003e from the list",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "verify correct  \"\u003cheadline\u003e\" is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "amazon-customer-service-validation;validate-all-the-option-from-payment-\u0026-pricing;",
  "rows": [
    {
      "cells": [
        "item",
        "headline"
      ],
      "line": 17,
      "id": "amazon-customer-service-validation;validate-all-the-option-from-payment-\u0026-pricing;;1"
    },
    {
      "cells": [
        "2",
        "About Pay on Delivery"
      ],
      "line": 18,
      "id": "amazon-customer-service-validation;validate-all-the-option-from-payment-\u0026-pricing;;2"
    },
    {
      "cells": [
        "3",
        "EMI (Easy Installments)"
      ],
      "line": 19,
      "id": "amazon-customer-service-validation;validate-all-the-option-from-payment-\u0026-pricing;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Validate all the option from Payment \u0026 Pricing",
  "description": "",
  "id": "amazon-customer-service-validation;validate-all-the-option-from-payment-\u0026-pricing;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User can see Browse Help Topics in the site",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on a 2 from the list",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "verify correct  \"About Pay on Delivery\" is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.user_can_see_Browse_Help_Topics_in_the_site()"
});
formatter.result({
  "duration": 36410100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "AmazonStepDefinition.user_clicks_on_a_from_the_list(int)"
});
formatter.result({
  "duration": 5544703500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About Pay on Delivery",
      "offset": 17
    }
  ],
  "location": "AmazonStepDefinition.verify_correct_is_shown(String)"
});
formatter.result({
  "duration": 11184625500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate all the option from Payment \u0026 Pricing",
  "description": "",
  "id": "amazon-customer-service-validation;validate-all-the-option-from-payment-\u0026-pricing;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User can see Browse Help Topics in the site",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on a 3 from the list",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "verify correct  \"EMI (Easy Installments)\" is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.user_can_see_Browse_Help_Topics_in_the_site()"
});
formatter.result({
  "duration": 49797600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "AmazonStepDefinition.user_clicks_on_a_from_the_list(int)"
});
formatter.result({
  "duration": 5279189300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EMI (Easy Installments)",
      "offset": 17
    }
  ],
  "location": "AmazonStepDefinition.verify_correct_is_shown(String)"
});
formatter.result({
  "duration": 11140652100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Task Completion",
  "description": "",
  "id": "amazon-customer-service-validation;task-completion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User is on Customer service page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Browser is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.User_is_on_Customer_service_page()"
});
formatter.result({
  "duration": 7618500,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.browser_is_closed()"
});
formatter.result({
  "duration": 705833600,
  "status": "passed"
});
});