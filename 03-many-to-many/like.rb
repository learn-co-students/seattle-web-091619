class Like
  @@all = []
  # like_vote
  attr_accessor :user, :tweet
  def initialize(user, tweet)
    @user = user
    @tweet = tweet
    @@all << self
  end

  def self.all
    @@all
  end
end
