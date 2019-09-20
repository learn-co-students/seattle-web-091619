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

  def message=(message)
    @message = message
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

  def username
    # binding.pry
    self.user.username
  end

  def likes
    likes =   Like.all.find_all do |like|
      like.tweet == self
    end
  end

  def likers
    self.likes.map do |like|
      like.user
    end
    # self.tweet
  end



end
