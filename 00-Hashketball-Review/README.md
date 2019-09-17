# Hashketball Review

## Objectives
- Understand your responsibility with staying up to date with the class calendar
- Git Version Control
    - Understand Clone vs Fork
    - Understand Master Branch, Checkout New Branch, Checking for Branches
    - Understand the uses of `git add`, `git commit`, `git push`, `git pull`
- Distinguish between data types in Ruby
- Show how to look up documentation for data types in Ruby
- Demonstrate the use of common Array methods
  - `#each` => do something on every value in the array; always returns the original array
  - `#map`
  - `#select`
  - `#find` => finds things in an array; always returns some thing (either the found value or nil)
- Differentiate array methods by their respective return values
- Define the Single Responsibility Principle

## Learn.co

- Ensure that you are checking the calendar inside Learn.co to stay up to date daily on the lecture and content schedule.

## Git

- What is the difference between a clone and a fork?
  - Quick tutorial reference
    - [Git Version Control](https://www.youtube.com/watch?v=SWYqp7iY_Tc)

## TDD - Test Driven Development

- You will move from running the test suite with learn to the designated test environment
- Mod 1 command line test
  - `rspec`: runs the entire test file
  - `rspec --fail -fast`: runs the test file and stops at the first failed test
    - `rspec --f-f`: shorthand execution
  * Red, Green, Refactor
  * Make it work (shameless green), make it right, make it fast

## Array and Hash Methods

- [Ruby Array Method Cheat Sheet](https://www.shortcutfoo.com/app/dojos/ruby-arrays/cheatsheet)
- [Ruby Hash Method Cheat Sheet](https://www.shortcutfoo.com/app/dojos/ruby-hashes/cheatsheet)
  - `.each`
  - `.map`
  - `.collect`
  - `.select`
  - `.find`
  - `.length`

## Debugging Ruby

- [Learn.co Debugging with Pry](https://learn.co/lessons/debugging-with-pry)

## SWBAT (Students Will Be Able To)

- Get the lecture code via git
- Begin formulating their own **process** and do things like:
  - Follow the flow of code
  - Check data types
  - Test assumptions
    - What do you expect?
    - What do you get?
  - Debugging techniques:
    - `pry`
    - `puts`
  - Learn via playing with code
- Begin learning how to test their own code

**Summary**

- Use `puts` to help understand code flow / program execution
- Use `.class` to check data types
- Understand what can be done to different data types
  - (ex: can't add a number to an array)
- Use `pry` to investigate the code
  - If you `pry` above the code, it won't exist!
  - If you `pry` after an error, you'll never hit the `pry`
- Googling, reading docs, playing with code to understand it.


## Bonus Questions:

Define methods to return the answer to the following questions:

Which player has the most points? Call the method most_points_scored.

Which team has the most points? Call the method winning_team.

Which player has the longest name? Call the method player_with_longest_name.

## Super Bonus:

Write a method that returns true if the player with the longest name had the most steals. Call the method long_name_steals_a_ton?.
