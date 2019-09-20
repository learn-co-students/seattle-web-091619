class Cohort
  attr_accessor :mod_number
  attr_reader :name

  @@all = []

  def initialize(name, mod_number)
    @name = name
    @mod_number = mod_number
    @@all << self
  end

  def self.all
    @@all
  end

  def students
    Student.all.find_all do |student|
      # binding.pry
      student.cohort == self
    end
    #[<Student1>, <Student2>]
    # go into students class
    # look for cohort in that
    # match student.all.cohort == self
  #  @@all << self
  end

end
