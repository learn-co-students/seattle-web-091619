class Book
  attr_accessor :title, :author, :reader_id

  def initialize(params = {title: title, author: author, reader: reader_id, id: id=nil})
    @id = params[:id]
    @title = params[:title]
    @author = params[:author]
    @reader_id = params[:reader]
  end

  #Create
  def self.new_table
    DB[:conn].execute("CREATE TABLE books(id INTEGER PRIMARY KEY, title TEXT, author TEXT)")
  end

  #Read
  def self.all
    books = DB[:conn].execute("SELECT * FROM books")
    books.map do |book|
      Book.new(book["title"], book["author"], book["id"])
    end
  end


  #Create
  def self.create(title, author)
    sql = "INSERT INTO books(title, author)
      VALUES(?,?)"
    DB[:conn].execute(sql,title, author)
  end

  #Read
  def self.find(id)
    sql = "SELECT * FROM books WHERE id = ?"
    books = DB[:conn].execute(sql, id)
    books.map do |book|
        Book.new(book["title"], book["author"], book["id"])
    end.first
  end

  def delete(id)
    sql  = "DELETE FROM books WHERE id = ?"
    DB[:conn].execute(sql, id)
  end

  def delete_by_title(title)
    sql = "DELETE FROM books WHERE title =?"
    DB[:conn].execute(sql, title)
  end

  def delete_by_author(author)
    sql = "DELETE FROM books WHERE author =?"
    DB[:conn].execute(sql, author)
  end

  def self.drop
    sql = "DROP TABLE books"
    DB[:conn].execute(sql)
  end

  # def find_by_title(value)
  #
  # end
  #
  # def find_by_author(value)
  #
  # end
  #
  # #Update
  # def update()
  # end


end
