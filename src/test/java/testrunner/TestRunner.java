package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features="src/test/java/features",
		glue={"stepdefination","hooks"},
		monochrome = true,
		//dryRun = true,
		//tags={"@editCategory"},
		plugin = {"pretty","html:reports/cucumber-pretty","json:reports/jsonreport.json","junit:reports/xmlreport.xml"}
		)

public class TestRunner {

}
