$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Categories.feature");
formatter.feature({
  "name": "Categories",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add New",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addNewCategory"
    }
  ]
});
formatter.step({
  "name": "User clicks on add new",
  "keyword": "Given "
});
formatter.step({
  "name": "User is on the Add Category Page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cc_name\u003e\" \"\u003cmt_title\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click on save",
  "keyword": "And "
});
formatter.step({
  "name": "Success message is displayed and new category is verified",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "c_name",
        "mt_title"
      ]
    },
    {
      "cells": [
        "Deo",
        "Deo"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_is_on_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on catalog and categories",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_catalog_and_categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to the categories page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_navigated_to_the_categories_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addNewCategory"
    }
  ]
});
formatter.step({
  "name": "User clicks on add new",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_clicks_on_add_new()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Add Category Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_the_Add_Category_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Deo\" \"Deo\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_enters(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.click_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Success message is displayed and new category is verified",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.success_message_is_displayed_and_new_category_is_verified()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Edit",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editCategory"
    }
  ]
});
formatter.step({
  "name": "User clicks on the edit logo",
  "keyword": "Given "
});
formatter.step({
  "name": "edits the \"\u003cc_name\u003e\" \"\u003cmt_title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on save",
  "keyword": "When "
});
formatter.step({
  "name": "Success message is displayed and edit is verified",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "c_name",
        "mt_title"
      ]
    },
    {
      "cells": [
        "Books",
        "Books"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_is_on_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on catalog and categories",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_catalog_and_categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to the categories page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_navigated_to_the_categories_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editCategory"
    }
  ]
});
formatter.step({
  "name": "User clicks on the edit logo",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_clicks_on_the_edit_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "edits the \"Books\" \"Books\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.edits_the(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.click_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Success message is displayed and edit is verified",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.success_message_is_displayed_and_edit_is_verified()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_is_on_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on catalog and categories",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_catalog_and_categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to the categories page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_navigated_to_the_categories_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deleteCategory"
    }
  ]
});
formatter.step({
  "name": "User selects checkbox",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_selects_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on delete and confirms",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_clicks_on_delete_and_confirms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validation message is displayed and delete is confirmed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.validation_message_is_displayed_and_delete_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/manufacturer.feature");
formatter.feature({
  "name": "Add New Manufacturer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add New",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addNewManufacturer"
    }
  ]
});
formatter.step({
  "name": "user clicks on the add new button",
  "keyword": "Given "
});
formatter.step({
  "name": "User is on the Add Manufacturer page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cm_name\u003e\" \"\u003cseo_url\u003e\" \"\u003csort_order\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "Success message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "m_name",
        "seo_url",
        "sort_order"
      ]
    },
    {
      "cells": [
        "MI",
        "https://www.mi.com/case-stud5y/xaomi-o",
        "84"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_is_on_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on catalog and manufacturers",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_catalog_and_manufacturers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to the manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_navigated_to_the_manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addNewManufacturer"
    }
  ]
});
formatter.step({
  "name": "user clicks on the add new button",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_clicks_on_the_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Add Manufacturer page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_the_Add_Manufacturer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"MI\" \"https://www.mi.com/case-stud5y/xaomi-o\" \"84\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_enters(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.success_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Edit",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editManufacturer"
    }
  ]
});
formatter.step({
  "name": "User clicks  on the edit button",
  "keyword": "Given "
});
formatter.step({
  "name": "User edits the information \"\u003cm_name\u003e\" \"\u003cseo_url\u003e\" \"\u003csort_order\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.step({
  "name": "Success message is displayed and edit is confirmed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "m_name",
        "seo_url",
        "sort_order"
      ]
    },
    {
      "cells": [
        "Apple",
        "https://www.apple.com/case-study/apple-s31e1521o",
        "14"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_is_on_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on catalog and manufacturers",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_catalog_and_manufacturers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to the manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_navigated_to_the_manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editManufacturer"
    }
  ]
});
formatter.step({
  "name": "User clicks  on the edit button",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_clicks_on_the_edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User edits the information \"Apple\" \"https://www.apple.com/case-study/apple-s31e1521o\" \"14\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_edits_the_information(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Success message is displayed and edit is confirmed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.success_message_is_displayed_and_edit_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_is_on_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on catalog and manufacturers",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.clicks_on_catalog_and_manufacturers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to the manufacturers page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_navigated_to_the_manufacturers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deleteManufacturer"
    }
  ]
});
formatter.step({
  "name": "User selects one or multiple checkbox",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_selects_one_or_multiple_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on the delete button and confirms",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_Clicks_on_the_delete_button_and_confirms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Success message is displayed and delete is confirmed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.success_message_is_displayed_and_delete_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});