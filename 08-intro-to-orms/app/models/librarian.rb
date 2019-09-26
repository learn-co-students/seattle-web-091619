class Librarian
  attr_accessor :name, :age, :fave_book

  def initialize(name, age, fave_book, id=nil)
    @id = id
    @name = name
    @age = age
    @fave_book = fave_book
  end

  def self.new_table
    DB[:conn].execute("CREATE TABLE librarians(id INTEGER PRIMARY KEY, name TEXT, age INTEGER, fave_book TEXT)")
  end

  def self.all
    librarians = DB[:conn].execute("SELECT * FROM librarians")
  end

  def self.create(name, age, fave_book)
    sql = "INSERT INTO librarians(title, author)
      VALUES(?,?,?)"
    DB[:conn].execute(sql,name, age, fave_book)
  end

end
