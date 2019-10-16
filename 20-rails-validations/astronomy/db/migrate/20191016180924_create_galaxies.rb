class CreateGalaxies < ActiveRecord::Migration[6.0]
  def change
    create_table :galaxies do |t|
      t.string :name
      t.integer :size
      t.integer :distance

      t.timestamps
    end
  end
end
