class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table(:customers) do |t|
      t.string :name
      t.integer :hunger
      t.integer :line_id
    end
  end
end
