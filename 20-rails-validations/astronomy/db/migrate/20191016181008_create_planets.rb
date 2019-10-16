class CreatePlanets < ActiveRecord::Migration[6.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.integer :size
      t.boolean :life
      t.integer :galaxy_id

      t.timestamps
    end
  end
end
