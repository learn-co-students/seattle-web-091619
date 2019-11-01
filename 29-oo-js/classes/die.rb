class Die
  attr_reader :faces

  def initialize
    @faces = 6
    self.faces
  end

  def roll
    rand 1..@faces
  end
end

d6 = Die.new
puts "Rolling a D#{d6.faces}"
puts d6.roll