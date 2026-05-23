Feature: Parabank Signup and Login

Scenario: Register new user and login successfully

Given User launches parabank application

When User navigates to registration page

And User enters registration details

Then Account should be created successfully

When User logs into application

Then User should see account overview page

And Print amount after login