# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_30_211448) do

  create_table "customers", force: :cascade do |t|
    t.string "name"
    t.integer "hunger"
    t.integer "line_id"
  end

  create_table "lines", force: :cascade do |t|
    t.string "customer_name"
    t.integer "order_num"
  end

  create_table "orders", force: :cascade do |t|
    t.string "food_name"
    t.float "price"
    t.integer "customer_id"
  end

end
