class User

  # attr_accessor :username
  attr_reader :username
  attr_writer :username

  @@all = []

  def initialize(username)
    @username = username
    @@all << self
  end

  def post_tweet(message)
    @tweet = Tweet.new(self, message)
  end

  def self.all
    @@all
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

end
