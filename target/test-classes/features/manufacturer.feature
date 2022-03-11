Feature: Add New Manufacturer

  Background: Login
    Given User is on the site
    When User enters username and password
    And Clicks on login
    And Clicks on catalog and manufacturers
    Then User is navigated to the manufacturers page

  @addNewManufacturer
  Scenario Outline: Add New
    Given user clicks on the add new button
    And User is on the Add Manufacturer page
    When User enters "<m_name>" "<seo_url>" "<sort_order>"
    And Clicks on save button
    Then Success message is displayed

    Examples: 
      | m_name | seo_url                                | sort_order |
      | MI     | https://www.mi.com/case-stud5y/xaomi-o |         84 |

  @editManufacturer
  Scenario Outline: Edit
    Given User clicks  on the edit button
    When User edits the information "<m_name>" "<seo_url>" "<sort_order>"
    And Clicks on save button
    Then Success message is displayed and edit is confirmed

    Examples: 
      | m_name | seo_url                                          | sort_order |
      | Apple  | https://www.apple.com/case-study/apple-s31e1521o |         14 |

  @deleteManufacturer
  Scenario: Delete
    Given User selects one or multiple checkbox
    When User Clicks on the delete button and confirms
    Then Success message is displayed and delete is confirmed
