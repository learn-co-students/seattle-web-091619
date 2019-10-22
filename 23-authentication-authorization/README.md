## SWBATs
- Understand, theoretically how authentication works
- Understand theoretically how authorization work
- Implement Sign in vs sign up
- Review sessions, cookies
- Implement log in, and log out

## Authentication && Authorization
1. What is authentication?
  - goblins -> from harry potter ( this might be more authorization)
    - they take the wands to verify who the wizard.
  - counterfeit protection
  - taking a look at a value and verifying the user.
2. What is authorization?
  - when something is authentic it can become authorized.
  - permissions -> read && write specific pages.


## User Stories
1. As a registered teacher, I should be able to sign up by providing my username.
  1. Add a teacher model with a username
  2. it's going to be in the new page -> teacher
  3. Add a form -> takes in a username
  4. new and create for the routes -> create a new teacher.
  5. take them to the students index page.

2. As a registered teacher, I should be able to log in by providing my username.
  - form -> separate controller that keeps track of the current session -> which is going represent someone logged in.
  - form takes a username
    - verify to see if it exists in the database
  - take them back to the students index.

3. As an un-authenticated teacher, I should not be able to see a list of students and information about an individual student.
  - index page -> students_controller
  - show page -> students_controller

4. As an authenticated teacher I should be able see a list of students and information about an individual student plus create a new student.

5. If an un-authenticated teacher tries to see the new student form, they should be redirected to the login page.

6. I should be able to add a password to my site and validate teacher.
  - Discuss different encryption and  hashing schemes
  - For Example : `Digest::SHA256.base64digest`
    - deterministic: same input => same   output
    - introduce `bcrypt`
    - `BCrypt::Password.create`
    - `has_secure_password` macro
    - Augment a teacher model in rails using `bcrypt`

## Resources
##### Password Authentication Guidelines

- install gem `bcrpyt`
- you don't store passwords as plain text
  - add a password_digest column.
  - add `has_secure_password` to the model with the password.
- at signin use the bcrypt authenticate method to confirm that the password matches
- password hashing is one-way encryption (we never decrypt it)

- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
"README.md" 41L, 1628C
