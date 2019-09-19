class Student
  attr_accessor :name, :location, :age, :cohort

  @@all = []

  def initialize(name, location, age, cohort)
    @name = name
    @location = location
    @age = age
    @cohort = cohort
    @@all << self
  end

  def self.all
    @@all
  end
end
