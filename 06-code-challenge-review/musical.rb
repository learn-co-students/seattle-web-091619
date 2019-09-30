class Musical
  attr_accessor :name
  attr_reader :setting_city

  @@all = []
  def initialize(name, setting_city)
    @name = name
    @setting_city = setting_city
    @@all << self
  end

  def self.all
    @@all
  end

  def self.all_introductions
    self.all.each do |musical|
      # musical.name
      puts "Welcome, this is #{musical.name},
      set in #{musical.setting_city}"
    end

    # city = self.all.map do |musical|
    #   musical.setting_city
    # end
    # "Welcome, this is #{name},
    # set in #{city}"
  end

  def performances
    # Get some information from the joiner
    # Performances, we are already in musical
    Performance.all.select do |perf|
      perf.musical == self
    end
  end

end
