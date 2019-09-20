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

  def like_tweet(tweet)
    # Store this in the like class
    # Show that they liked a specific message
    # if it exists.
    Like.new(self, tweet)
    # Like.all[tweet.include?()]
  end

  def liked_tweets
    likes =   Like.all.find_all do |like|
      # binding.pry
      like.user == self
    end

    liked_tweets = likes.map do |like|
      like.tweet
    end
    # self.tweet
  end

end
