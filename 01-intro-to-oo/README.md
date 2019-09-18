# Intro to Object Orientation

## SWBATs
- [ ] Quick Exercise :
  1. I have a hash :
  ```Ruby
    instructor_stats = [
      { name: "Soundarya", location: "Olympia", fav_drink: "Energy", color: "blue"},
      { name: "Ix", location: "Seattle", fav_drink: "water", color: "rainbow"},
      {name: "Jamilah", location: "Seattle", fav_drink: "red wine", color: "blue"}
    ]
      result : ["Soundarya", "Ix", "Jamilah"]
      result : find all the instructors that have fav color blue
          - [{}, {}]
    #Solutions
    k = []
    x= 0
    while x<instructor_stats.length
    k << instructor_stats[x][:name]
    x +=1
    end

    instructors_stats.each do |instructor|
      k << instructor[:name]
    end

    instructors_stats.map do |instructor|
      instructor[:name]
    end

    ##Second Solution
    instructor_stats.select do |instructor|
      instructor.color == "blue"
    end
  ```
- [x] Define `object` in programming domain.
- [ ] Create a class and instantiate an instance of the class.
- [x] Explain the difference between a class and an instance.
- [x] Pass arguments to `new` by defining an initialize method in class
- [ ] Create instance methods
- [x] Discuss methods as messages
- [x] Get more practice with array compositions (`each`, `map`, `select`/`filter`).
- [x] Explain the need for variable scope and why it's important to not utilize global variables.

- Self : What is it:
  - Refer to the value of the object.
  - Make reference to what you are contained inside of.
  - scope
