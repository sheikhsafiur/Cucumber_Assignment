package stepdefination;

import java.util.Random;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.interactions.KeyUpAction;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hooksclass;
import junit.framework.Assert;

public class StepDefination {
	
	WebDriver driver = hooksclass.driver;
	Random randomGenerator = new Random();  
	int randomInt = randomGenerator.nextInt(1000);
	public static String mm_name;
	
	
	@Given("User is on the site")
	public void user_is_on_the_site() throws Exception {
		try
		{
			driver.get("http://uniformm1.upskills.in/admin");
			driver.manage().window().maximize();
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in User is on the site block");
		
		}
		
	}
	 
	@When("User enters username and password")
	public void user_enters_username_and_password() {
		
		try
		{
			driver.get("http://uniformm1.upskills.in/admin");
			driver.manage().window().maximize();
		    
			driver.findElement(By.id("input-username")).sendKeys("admin");
			driver.findElement(By.id("input-password")).sendKeys("Admin@123");
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in User enters username and password block");
		}
	}
	

	@When("Clicks on login")
	public void clicks_on_login() {
		try
		{
			driver.findElement(By.xpath("//button[@class='btn btn-primary']")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in Clicks on login block");
		}
	    
	}

	@When("Clicks on catalog and manufacturers")
	public void clicks_on_catalog_and_manufacturers() {
		
		try
		{
			driver.findElement(By.xpath("//i[@class='fa fa-tags fa-fw']")).click();
			driver.findElement(By.xpath("//a[text()='Manufacturers']")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in Clicks on catalog and manufacturers block");
		}
		
	}

	@Then("User is navigated to the manufacturers page")
	public void user_is_navigated_to_the_manufacturers_page() {
		try
		{
			String actual = driver.getTitle();
			String expected="Manufacturers";
			Assert.assertEquals(expected, actual);
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in User is navigated to the manufacturers page block");
		}
		
	}
	
	@Given("user clicks on the add new button")
	public void user_clicks_on_the_add_new_button() {
		try
		{
			driver.findElement(By.xpath("//i[@class='fa fa-plus']")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in user clicks on the add new button block");
		}
	}

	@Given("User is on the Add Manufacturer page")
	public void user_is_on_the_Add_Manufacturer_page() {
		try
		{
			String actual= driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
			
			Assert.assertEquals("Add Manufacturer", actual);
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in User is on the Add Manufacturer page block");
		}
	}

	@When("User enters {string} {string} {string}")
	public void user_enters(String m_name, String seo_url, String sort_order) {
		try
		{
		    driver.findElement(By.id("input-name")).sendKeys(m_name);
		    driver.findElement(By.id("input-keyword")).sendKeys(seo_url+randomInt);
		    driver.findElement(By.id("input-sort-order")).sendKeys(sort_order);
		    mm_name=m_name;
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in User enters {string} {string} {string} block");
		}
	}

	@When("Clicks on save button")
	public void clicks_on_save_button() {
		try
		{
			driver.findElement(By.xpath("//button[@type='submit']")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in Clicks on save button block");
		}
	}

	@Then("Success message is displayed")
	public void success_message_is_displayed() {
		try
		{
		    String actual= driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	//	    System.out.println(actual);
		    String expected="Success: You have modified manufacturers!\n×";
		    Assert.assertEquals(expected, actual);
		    
		    actual= driver.findElement(By.xpath("//*[text()='"+mm_name+"']")).getText();
		    expected=mm_name;
		    Assert.assertEquals(expected, actual);
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in Success message is displayed block");
		}
	   
	}
	

	@Given("User clicks  on the edit button")
	public void user_clicks_on_the_edit_button() {
		try
		{
			driver.findElement(By.xpath("//*[text()='"+mm_name+"']/following-sibling::td/a")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in User clicks  on the edit button block");
		}
	}

	
	@When("User edits the information {string} {string} {string}")
	public void user_edits_the_information(String m_name, String seo_url, String sort_order) throws InterruptedException {
		
		try
		{
			WebElement element=driver.findElement(By.id("input-name"));
			element.clear();
			element.sendKeys(m_name);
			
			
			element =driver.findElement(By.id("input-keyword"));
		    element.clear();
		    element.sendKeys(seo_url);
		    
		    element= driver.findElement(By.id("input-sort-order"));
		    element.clear();
		    element.sendKeys(sort_order);
		    mm_name=m_name;
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in User edits the information {string} {string} {string} block");
		}
		
	    
	}
	@Then("Success message is displayed and edit is confirmed")
	public void success_message_is_displayed_and_edit_is_confirmed() {
		try
		{
			String actual= driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		    String expected="Success: You have modified manufacturers!\n×";
		    Assert.assertEquals(expected, actual);
		    
		    
		    actual= driver.findElement(By.xpath("//*[text()='"+mm_name+"']")).getText();
		    expected=mm_name;
		    Assert.assertEquals(expected, actual);
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in Success message is displayed and edit is confirmed block");
		}
	    
	    
	    
	}
	@Given("User selects one or multiple checkbox")
	public void user_selects_one_or_multiple_checkbox() throws InterruptedException {
		try
		{
		    driver.findElement(By.xpath("//*[text()='"+mm_name+"']//ancestor::tr//input")).click();
		    Thread.sleep(2000);
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in User selects one or multiple checkbox block");
		}
	    
	}

	@When("User Clicks on the delete button and confirms")
	public void user_Clicks_on_the_delete_button_and_confirms() throws InterruptedException {
		try
		{
		   driver.findElement(By.xpath("//i[@class='fa fa-trash-o']")).click();
		   Thread.sleep(2000);
		   Alert alert= driver.switchTo().alert();
		   Thread.sleep(2000);
		   alert.accept();
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in User Clicks on the delete button and confirms block");
		}
	   
	}
	
	
	@Then("Success message is displayed and delete is confirmed")
	public void success_message_is_displayed_and_delete_is_confirmed() {
		try
		{
		String actual= driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	    String expected="Success: You have modified manufacturers!\n×";
	    Assert.assertEquals(expected, actual);
	    
	    	boolean expect= false;
	    	boolean fetched = true;
	    	try
	    	{
	    		driver.findElement(By.xpath("//*[text()='"+mm_name+"']")).isDisplayed();
	    	}
	    	catch(NoSuchElementException e)
	    	{
	    		fetched=false;
	    	}
	    	
	    	Assert.assertEquals(expect, fetched);
		}
		catch(Exception e)
		{
			System.out.println("Error "+e+" in Success message is displayed and delete is confirmed block");
		}
	
	}
	
	
	
	
	/*............................CATEGORIES STARTS HERE......................*/
	



	@When("Clicks on catalog and categories")
	public void clicks_on_catalog_and_categories() {
		try
		{
			driver.findElement(By.xpath("//i[@class='fa fa-tags fa-fw']")).click();
			driver.findElement(By.xpath("//a[text()='Categories']")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in Clicks on catalog and categories block");
		}
		
	}

	@Then("User is navigated to the categories page")
	public void user_is_navigated_to_the_categories_page() {
		try
		{
		    String actual=driver.findElement(By.xpath("//h3[text()=' Category List']")).getText();
		    Assert.assertEquals("Category List", actual);
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in User is navigated to the categories page block");
		}
	}

	@Given("User clicks on add new")
	public void user_clicks_on_add_new() {
		try
		{
			driver.findElement(By.xpath("//a[@data-original-title='Add New']")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in User clicks on add new block");
		}
		
	}

	@Given("User is on the Add Category Page")
	public void user_is_on_the_Add_Category_Page() {
		try
		{
		    String actual=driver.findElement(By.xpath("//h3[text()=' Add Category']")).getText();
		    Assert.assertEquals("Add Category", actual);
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in User is on the Add Category Page block");
		}
		
	}

	@When("User enters {string} {string}")
	public void user_enters(String c_name, String mt_title) {
		try
		{
		    driver.findElement(By.id("input-name1")).sendKeys(c_name);
		    driver.findElement(By.id("input-meta-title1")).sendKeys(mt_title);
		    mm_name=c_name;
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in User enters {string} {string} block");
		}
		
	}

	@When("Click on save")
	public void click_on_save() {
		try
		{
			driver.findElement(By.xpath("//button[@data-original-title='Save']")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in Click on save block");
		}
	}

	@Then("Success message is displayed and new category is verified")
	public void success_message_is_displayed_and_new_category_is_verified() {
		try
		{
		    String actual=driver.findElement(By.xpath("//*[text()=' Success: You have modified categories!      ']")).getText();
		    Assert.assertEquals("Success: You have modified categories!\n×", actual);
		    
		    actual=driver.findElement(By.xpath("//td[text()='"+mm_name+"']")).getText();
		    Assert.assertEquals(mm_name, actual);
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in Success message is displayed and new category is verified block");
		}
		
	    
	}
	
	
	@Given("User clicks on the edit logo")
	public void user_clicks_on_the_edit_logo() {
		try
		{
			driver.findElement(By.xpath("//td[text()='"+mm_name+"']/following-sibling::td/a")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in User clicks on the edit logo block");
		}
	}

	@Given("edits the {string} {string}")
	public void edits_the(String c_name, String mt_title) {
		try
		{
			WebElement element=driver.findElement(By.id("input-name1"));
			element.clear();
			element.sendKeys(c_name);
			element=driver.findElement(By.id("input-meta-title1"));
			element.clear();
			element.sendKeys((mt_title));
			mm_name=c_name;
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in edits the {string} {string} block");
		}
	}

	@Then("Success message is displayed and edit is verified")
	public void success_message_is_displayed_and_edit_is_verified() {
		try
		{
		 String actual=driver.findElement(By.xpath("//*[text()=' Success: You have modified categories!      ']")).getText();
		    Assert.assertEquals("Success: You have modified categories!\n×", actual);
		    
		    actual=driver.findElement(By.xpath("//td[text()='"+mm_name+"']")).getText();
		    Assert.assertEquals(mm_name, actual);
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in Success message is displayed and edit is verified block");
		}
		
	}
	
	@Given("User selects checkbox")
	public void user_selects_checkbox() throws InterruptedException {
		try
		{
			driver.findElement(By.xpath("//*[text()='"+mm_name+"']//ancestor::tr//input")).click();
			Thread.sleep(2000);
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in User selects checkbox block");
		}
	}

	@When("User clicks on delete and confirms")
	public void user_clicks_on_delete_and_confirms() throws InterruptedException {
		try
		{
		driver.findElement(By.xpath("//button[@data-original-title='Delete']")).click();
		   Thread.sleep(2000);
		   Alert alert= driver.switchTo().alert();
		   Thread.sleep(2000);
		   alert.accept();
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in User clicks on delete and confirms block");
		}
		
	}

	@Then("Validation message is displayed and delete is confirmed")
	public void validation_message_is_displayed_and_delete_is_confirmed() {
		try
		{
			String actual=driver.findElement(By.xpath("//*[text()=' Success: You have modified categories!      ']")).getText();
		    Assert.assertEquals("Success: You have modified categories!\n×", actual);
		    
		    boolean expect= false;
	    	boolean fetched = true;
	    	try
	    	{
	    		driver.findElement(By.xpath("//*[text()='"+mm_name+"']")).isDisplayed();
	    	}
	    	catch(NoSuchElementException e)
	    	{
	    		fetched=false;
	    	}
	    	
	    	Assert.assertEquals(expect, fetched);
		}
		catch(Exception e)
		{
			System.out.println("Error:: "+e+" in Validation message is displayed and delete is confirmed block");
		}
		



	    
	    
	}







}
