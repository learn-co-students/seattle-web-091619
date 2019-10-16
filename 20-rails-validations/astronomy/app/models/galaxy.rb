class Galaxy < ApplicationRecord
  validates :name,:size,:distance, presence: true
  validates :distance, numericality: { less_than_or_equal_to: 1400000 ,  only_integer: true }
  validates :name, uniqueness: true
end
