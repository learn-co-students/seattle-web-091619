class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :food_name
      t.float :price
      t.integer :customer_id
    end
  end
end
