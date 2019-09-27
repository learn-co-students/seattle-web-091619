class Buyer
  attr_accessor :name, :fave_sand, :id
  def initialize(name, fave_sand, id= nil)
    @name  = name
    @fave_sand = fave_sand
    @id = id
  end
  #READ
  # SELECT all the buyers
  def self.all
    buyers = DB[:conn].execute("SELECT * FROM buyers")
  end
  #CREATE
  def self.new_table
    DB[:conn].execute("CREATE TABLE buyers(id INTEGER PRIMARY KEY, name TEXT, fave_sand TEXT)")
  end

  #INSERTING data into our database
  def self.create(name, fave_sand)
    query = "INSERT INTO buyers(name, fave_sand) VALUES(?,?)"
    DB[:conn].execute(query, name, fave_sand)
  end
  #UPDATE
  #DELETE
end
