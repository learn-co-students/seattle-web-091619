class Reader
  attr_accessor :name, :age, :fave_book

  # we won't be using this anymore.
  # @@all that we will now refer to is the SELECT * FROM table
  # @@all = []

  def initialize(name, age, fave_book, id=nil)
    @name = name
    @age = age
    @fave_book = fave_book
  end

  #Create
  def self.new_table
    DB[:conn].execute("CREATE TABLE readers(id INTEGER PRIMARY KEY, name TEXT, age INTEGER, fave_book TEXT)")
  end

  #Reader
  def self.all
    DB[:conn].execute("SELECT * FROM readers")
  end

  def self.create(name, age, fave_book)
    sql = "INSERT INTO readers(title, author)
      VALUES(?,?,?)"
    DB[:conn].execute(sql,name, age, fave_book)
  end
end
