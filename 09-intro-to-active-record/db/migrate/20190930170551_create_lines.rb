class CreateLines < ActiveRecord::Migration[5.2]
  def change
    create_table :lines do |t|
      t.string :customer_name
      t.integer :order_num
    end
  end
end
