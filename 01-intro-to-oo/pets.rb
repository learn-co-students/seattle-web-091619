require 'pry'

pets = [
  {name: "Cole", pet:   "Cyano Bacteria"},
  {name: "Andy", pet:   "Scout"         },
  {name: "Andy", pet:   "Rainier"       },
  {name: "Garret", pet: "Kitty Cat"     },
  {name: "Garret", pet: "Sniggy"        },
  {name: "Garret", pet: "Kitty Cat"     },
  {name: "Sergio", pet: "Pako"          },
  {name: "Sergio", pet: "Nikki"         },
  {name: "Sergio", pet: "Jack"          },
  {name: "Sergio", pet: "Puppy"         },
  {name: "Soumya", pet: "Tyro"          }
]

class Pet
  attr_accessor :name, :pet
  # attr_reader
  # attr_writer
  # @@message = ""
  @@all = []

  def initialize(name, pet)
    @name = name
    @pet = pet
    @@all << self
    # binding.pry
    # @@message << name
    # binding.pry
  end

  def self.all
    # binding.pry
    @@all
  end

  #getters
  # def name
  #   @name
  # end
  #
  # def pet
  #   @pet
  # end
  #
  # #setters
  # def name=(name)
  #   @name = name
  # end
  #
  # def pet=(pet)
  #   @pet = pet
  # end
end


pet1  = Pet.new("Cole" , "Cyano Bacteria")
pet2  = Pet.new("Andy","Scout")
pet3  = Pet.new("Andy","Rainier")
pet4  = Pet.new("Garret","Kitty Cat")
pet5  = Pet.new("Garret","Sniggy")
pet6  = Pet.new("Garret","Kitty Cat")
pet7  = Pet.new("Sergio","Pako" )
pet8  = Pet.new("Sergio","Nikki")
pet9  = Pet.new("Sergio","Jack" )
pet10 = Pet.new("Sergio","Puppy")
pet11 = Pet.new("Soumya","Tyro" )
Pry.start
0
##Objects :
# - Name, Variables
# - Methods
# - Keys
# - Objects
