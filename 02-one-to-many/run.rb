require 'pry'
require 'require_all'

require_relative 'tweet'
require_relative 'user'
require_relative 'cohort'
require_relative 'student'

# require_all '../02-one-to-many'
# coffee_dad = User.new("Coffee Dad")
# tea_uncle = User.new("Tea Uncle")
# donut_mom = User.new("Donut Mom")
# biscuit_aunt = User.new("Biscuit Aunt")
#
# coffee_dad.post_tweet("I Love Tea")
# coffee_dad.post_tweet("Tea is meh")
# tea_uncle.post_tweet("I Hate cofee")
# tea_uncle.post_tweet("I Love Tea")
# donut_mom.post_tweet("Bagels suck")
# donut_mom.post_tweet("NVMD I like bagels")
# biscuit_aunt.post_tweet("Crackers are lame")

seattle_first = Cohort.new("Seattle.first", 6)
seattle_second = Cohort.new("Seattle.CRUD", 6)

student1 = Student.new("Student1", "Seattle", 100, seattle_first)
student2 = Student.new("Student2", "Seattle", 10, seattle_first)
student3 = Student.new("Student3", "Seattle", 99, seattle_second)

Pry.start
0
