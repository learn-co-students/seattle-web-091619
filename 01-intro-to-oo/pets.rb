require 'pry'

pets = [
  {name: "Cole", pet: "Cyano Bacteria"},
  {name: "Andy", pet: "Scout"},
  {name: "Andy", pet: "Rainier"},
  {name: "Garret", pet: "Kitty Cat"},
  {name: "Garret", pet: "Sniggy"},
  {name: "Garret", pet: "Kitty Cat"},
  {name: "Sergio", pet: "Pako"},
  {name: "Sergio", pet: "Nikki"},
  {name: "Sergio", pet: "Jack"},
  {name: "Sergio", pet: "Puppy"},
  {name: "Soumya", pet: "Tyro"}
]

class Pet
  def initialize(name, pet,age)
    @name = name
    @pet = pet
    @age = age
    # binding.pry
  end

  #getters
  def name
    @name
  end

  def age
    @age
  end

  def pet
    @pet
  end
end



Pry.start
0
##Objects :
# - Name, Variables
# - Methods
# - Keys
# - Objects
