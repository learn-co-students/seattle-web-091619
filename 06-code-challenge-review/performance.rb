class Performance
  attr_accessor :musical, :theater
  @@all = []
  def initialize(musical, theater)
    @musical = musical
    @theater = theater
    @date = "09/10/2019"
    @@all << self
  end

  def self.all
    @@all
  end
end
