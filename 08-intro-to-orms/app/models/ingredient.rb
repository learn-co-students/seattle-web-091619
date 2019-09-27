class Ingredient
  attr_accessor :name, :quantity, :id

  def initialize(name, quantity, id= nil)
    @name = name
    @quantity = quantity
    @id = id
  end

  #CREATE
  #READ
  #UPDATE
  #DELETE
end
