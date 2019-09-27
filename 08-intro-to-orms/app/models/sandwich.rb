class Sandwich
  attr_accessor :ingredient_id, :buyer_id, :id, :price

  def initialize(ingredient_id, buyer_id, id= nil, price)
    @ingredient_id = ingredient_id
    @buyer_id = buyer_id
    @id = id
    @price = price
  end
end
