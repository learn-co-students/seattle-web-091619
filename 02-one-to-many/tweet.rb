class Tweet

  @@all = []

  def initialize(user, message)
    @user = user
    @message = message
    @@all << self
  end

  # def message
  #   str = " "
  # end

  def message
    @message
  end

  # def user
  #   ben = User.new
  # end

  def user
    @user
  end

  def self.all
    @@all
  end
end