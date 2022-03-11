Feature: Categories

  Background: Login
    Given User is on the site
    When User enters username and password
    And Clicks on login
    And Clicks on catalog and categories
    Then User is navigated to the categories page

  @addNewCategory
  Scenario Outline: Add New
    Given User clicks on add new
    And User is on the Add Category Page
    When User enters "<c_name>" "<mt_title>"
    And Click on save
    Then Success message is displayed and new category is verified

    Examples: 
      | c_name | mt_title |
      | Deo  | Deo    |

  @editCategory
  Scenario Outline: Edit
    Given User clicks on the edit logo
    And edits the "<c_name>" "<mt_title>"
    When Click on save
    Then Success message is displayed and edit is verified

    Examples: 
      | c_name | mt_title |
      | Books  | Books    |

  @deleteCategory
  Scenario: Delete
    Given User selects checkbox
    When User clicks on delete and confirms
    Then Validation message is displayed and delete is confirmed
