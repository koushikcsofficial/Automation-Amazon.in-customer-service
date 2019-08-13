package utility;

import java.awt.AWTException;
import java.awt.Robot;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class baseClass {
	public static WebDriver driver;
	public static Robot robot;
	public static Properties prop;
	
	public baseClass(){
		try {
			prop = new Properties();
			FileInputStream fis = new FileInputStream(
					"D:\\java Automation\\BDDframework\\src\\main\\java\\configurations\\config.properties"
					);
			prop.load(fis);
		}catch(IOException e) {
			e.getMessage();
		}
	}
	
	public static void initialization() throws AWTException {
		String browsername = prop.getProperty("browser");
		if(browsername.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", "D:\\Automation needs\\chromedriver.exe");
			driver = new ChromeDriver();
		}else if(browsername.equals("Firefox")) {
			System.setProperty("webdriver.gecko.driver", "D:\\Automation needs\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get(prop.getProperty("url"));
		robot = new Robot();
	}
	
}
