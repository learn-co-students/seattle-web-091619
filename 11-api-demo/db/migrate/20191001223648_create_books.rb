class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :publishedDate
      t.string :description
      t.string :country
    end
  end
end
