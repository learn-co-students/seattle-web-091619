# One to Many Relationships

## SWBATs
* [ ] Implement one object to many objects relationship
  * [x] One object `has many` objects
  * [x] One object `belongs to` another object
* [ ] Practice passing custom objects as arguments to methods
* [ ] Demonstrate single source of truth
* [ ] Infer type of method (class or instance) through naming conventions
* [ ] Model/Domain
* [ ] Implement both sides of a many to many relationship
* [ ] Practice keeping groups of data related to classes on the class as a class variable
* [ ] Demonstrate _Single Source of Truth_ by **not** storing collections of objects on other objects
* [ ] Demonstrate _Single Source of Truth_ by **not** storing one object in multiple collections

## Questions??????

## Deliverables
* Create a User class. The class should have these methods:
  * [ ] `initialize` which takes a username and have
  * [ ]  a reader method for the username
  * [ ] `tweets` that returns an array of Tweet instances
  * [ ] `#post_tweet` that take a message, creates a new tweet, and adds it to the user's tweet collection
  * [ ] `#tweets` -> tweets array.
* Create a Tweet class. The class should have these methods:
  * [ ] Have a mini breakout and see which methods would be instance vs class.
  * [ ] Tweet has a method `message` that returns a string
  * [ ] `#user` that returns an instance of the user class
  * [ ] `.all` that returns all the Tweets created
  * [ ] `#username` that returns the username of the tweet's user

## Outline

* Review Relationships (one to many => `has_many`, `belongs_to`)
  * Go through other example domains
* Expand on relationships to express many to many
  * We'll build out a **new** relationship from scratch to teach this concept

## Define
* _Model_ - A class whose primary responsibility is to store data
* _Domain_ - The subject matter of the problem, (e.g., Learn's domain is online education)
* _Domain modeling_ - Creating models for your domain to represent real or abstract ideas (e.g., Learn's domain model includes modules, cohorts, assignments as well as their relationships)
* _Relationships_ - How one model or thing is connected to another model or thing
  * _One to many relationship_ - A relationship describing a single model that contains or keeps track of other models (a tree has many leaves, an organism has many cells, the universe has many galaxies)
  * _Many to many relationship_ (today!)
  * `belongs_to`
  * `has_many`
  * `through`
* _Schema_ - A visual representation of your data (models, relationships, etc.)
* [_Single Source of Truth_](https://en.wikipedia.org/wiki/Single_source_of_truth) - The practice of structuring _models_ and _relationships_ such that every data element is stored exactly once; any possible linkages to this data element are by reference only
  * **Why?** - Ask yourself, in the _one to many relationship_ of country to citizen, is it easier for the country to know about all of its citizens or is it easier for a citizen to know the which country they belong to? So how does a country find out its citizens? It conducts a census (a method) that asks all the people in the country if they are a citizen!

## Example Practices
Teachers >--< Students

Movies >-< Actors

Buyers >-< Sellers

SocialMedias >-< Users

CoffeeShops>--< Customers

- Wrong way to right way
- Changing things were confusing
- Understand what we talked about today
- Enumerables are still confusing
- Instance vs classes and methods
- I Don't know what I don't know.


## Deliverables
- User class
  - [ ] `like_tweet` that accepts as a tweet instance as a parameter
  - [ ] `all` that returns all the instances of a user.
  - [ ] `liked_tweets` that returns acollection of all the tweets this userhas liked
  - [ ] `unlike_tweet`
- Tweet class
  - [ ] `likers` that returns a collection ofall the Users who have liked this tweet



  ## References
  - [Blog on Self](https://dev.to/danvyle/understanding-self-via-football-analogy-2f0e)
