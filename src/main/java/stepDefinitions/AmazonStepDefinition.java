package stepDefinitions;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjectModels.AmazonCustomerServicePgeObjects;
import utility.baseClass;

public class AmazonStepDefinition extends baseClass{
	
	AmazonCustomerServicePgeObjects acspo = new AmazonCustomerServicePgeObjects();
	@Given("^User is on Amazon Home page$")
	public void user_is_on_Amazon_Home_page() throws Throwable {
	    baseClass.initialization();
	}
	
	@When("^User Clicks on Customer Service$")
	public void user_Clicks_on_Customer_Service() throws Throwable {
	    acspo.Click_CustomerService();
	}

	@When("^User Hover on payment pricing$")
	public void user_Hover_on_payment_pricing() throws Throwable {
	    acspo.Hover_Payments_and_pricing();
	}

	@Then("^User should see Payments & Pricing$")
	public void user_should_see_Payments_Pricing() throws Throwable {
	    acspo.verify_list();
	}

	@Given("^User can see Browse Help Topics in the site$")
	public void user_can_see_Browse_Help_Topics_in_the_site() throws Throwable {
		acspo.verify_topic_name("Browse Help Topics");
	}

	@When("^User clicks on a (\\d+) from the list$")
	public void user_clicks_on_a_from_the_list(int arg1) throws Throwable {
		acspo.click_at_items(arg1);
	}
	
	@Then("^verify correct  \"([^\"]*)\" is shown$")
	public void verify_correct_is_shown(String arg1) throws Throwable {
	    Assert.assertEquals(acspo.get_headline(), arg1);
	}
	
	@Given("^User is on Customer service page$")
	public void User_is_on_Customer_service_page() {
		acspo.verify_title("Amazon.in Help");
	}
	
	@Then("^Browser is closed$")
	public void browser_is_closed() throws Throwable {
	    acspo.close_browser();
	}

}
