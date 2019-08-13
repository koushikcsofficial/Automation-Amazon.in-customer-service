package pageObjectModels;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;


import utility.baseClass;

public class AmazonCustomerServicePgeObjects extends baseClass{
	
	String CustomerServiceOpt = "//*[@id='nav-xshop']/a[5]";
	String PaymentsPricing = "//*[@class='csg-hover-box-categories']/ul[1]/li[4]/a";
	String XpathDynamic1 = "//div[@id='help-gateway-category-3']/div/div/div/ul/li[";
	String XpathDymamic2 = "]/a";
	String Headlinepath = "//*[@class='help-content']/h1";
	String ListNameVerificationPath = "//*[@id=\"help-gateway-category-3\"]/div/div/div/ul/li[1]/h3";
	String AnotherTextVerificationPath = "//div[2]/div[4]/div/div[1]/div/h1";

	 
	
	public void Click_CustomerService() throws InterruptedException {
		driver.findElement(By.xpath(CustomerServiceOpt)).click();
		Thread.sleep(4000);
	}
	
	public void Hover_Payments_and_pricing() throws InterruptedException {
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath(PaymentsPricing))).perform();
		Thread.sleep(1000);
	}
	
	public void click_at_items(int i) throws InterruptedException {
		String Fullxpath = XpathDynamic1+i+XpathDymamic2;
		System.out.println(Fullxpath);
		driver.findElement(By.xpath(Fullxpath)).click();
		Thread.sleep(4000);
	}
	
	public String get_headline() throws InterruptedException {
		String headline = driver.findElement(By.xpath(Headlinepath)).getText().toString();
		Thread.sleep(2000);
		driver.navigate().back();
		Thread.sleep(2000);
		driver.findElement(By.xpath(CustomerServiceOpt)).click();
		Thread.sleep(2000);
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath(PaymentsPricing))).perform();
		Thread.sleep(1000);
		return headline;
	}
	
	public void verify_list() {
		String expected = driver.findElement(By.xpath(ListNameVerificationPath)).getText().toString();
		Assert.assertEquals(expected, "Payments & Pricing");
	}
	
	public void verify_topic_name(String actual) {
		String expected = driver.findElement(By.xpath(AnotherTextVerificationPath)).getText().toString();
		Assert.assertEquals(expected, actual);
	}
	
	public void verify_title(String actual) {
		String expected = driver.getTitle();
		Assert.assertEquals(expected, actual);
	}
	
	public void close_browser() {
		driver.quit();
	}

}
