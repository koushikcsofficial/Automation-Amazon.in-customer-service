package runnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\java Automation\\BDDframework\\src\\main\\java\\features\\amazon.feature"
		, glue = {"stepDefinitions"},
		format = {"pretty","html:output"},
		dryRun = false
		)

public class TestRunner {

}
