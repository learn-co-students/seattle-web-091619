# Into to Capybara

What is Capybara?
The capybara is a mammal native to South America. It is the largest living rodent in the world.</br>
Mass: 77 – 150 lbs (Large Adult)</br>
Height: 20 – 25 in. (Large Adult, At the withers)</br>
</br>
While this is true...let's get to Capybara Testing</br>

## What is Capybara?

Capybara is a library written in the Ruby programming language which makes it easy to simulate how a user interacts with your application. Capybara can talk with many different drivers which execute your tests through the same clean and simple interface.</br>
Capybara naturally fits with RSpec and no special integration is needed.

[Integration Testing with Capybara](https://docs.google.com/presentation/d/1vUErOo7OS903lncxox5-qZCn7hssYPrNqb0xD7K91A8/edit?usp=sharing)

[Cabybara Sourse Code](https://github.com/teamcapybara/capybara)

[Capybara Cheat Sheet](https://gist.github.com/zhengjia/428105)

## Test Driven Development

[TDD is fun!](https://medium.com/@stevenpslade/nobody-told-me-how-fun-tdd-was-eaf5a25fed07)

- Test-driven development (TDD) is an approach to development which combines test-first development where you write a test before you write just enough production code to fulfill that test and refactoring. What is the primary goal of TDD? One view is the goal of TDD is specification and not validation. Another view is that TDD is a programming technique. The goal of TDD is to write clean code that works.

## Unit Testing

- Unit testing is the practice of testing small pieces of code, typically individual functions, alone and isolated. If your test uses an external resource, like the network or a database, it’s not a unit test.

## Feature/Functional Testing/End to End Testing (e2e)

- This testing is defined as the testing of complete functionality of some application. In practice with web apps, this means using some tool to automate a browser, which is then used to click around on the pages to test the application
- End-to-end testing is a technique used to test whether the flow of an application right from start to finish is behaving as expected. The purpose of performing end-to-end testing is to identify system dependencies and to ensure that the data integrity is maintained between various system components and systems
- The entire application is tested for critical functionalities such as communicating with the other systems, interfaces, database, network, and other application

## Behavior Driven Development

- Behavioral Driven Development (BDD) is a software development approach that has evolved from TDD (Test Driven Development). It differs by being written in a shared language, which improves communication between tech and non-tech teams and stakeholders. </br>
  This is where user stories come into play. </br>
  BDD answers the "why" behind the code. </br>
