class Customer < ActiveRecord::Base
  belongs_to(:line)
  has_many :orders
end
