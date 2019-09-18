class User

  # attr_accessor :username
  attr_reader :username
  attr_writer :username

  def initialize(username)
    @username = username
    @tweets = []
  end

  # #getter
  # def username
  #   @username
  # end
  #
  # #setter
  # def username=(username)
  #   @username = username
  # end

end
