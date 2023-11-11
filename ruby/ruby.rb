#USER INPUT
#___________________________________________________________________________

# puts "Enter your name: "
# name = gets.chomp()

# puts "Enter your age: "
# age = gets.chomp()

# puts "Hey #{name}, you are #{age} years old!"

# puts "Enter a number: "
# num1 = gets.chomp().to_f

# puts "Enter another number: "
# num2 = gets.chomp().to_f

# puts "#{num1} plus #{num2} eqauls #{num1 + num2}"

#MADLIBS
#___________________________________________________________________________

# puts "Give a color: "
# color = gets.chomp()
# puts "Give a plural noun: "
# plural_noun = gets.chomp()
# puts "Give a Celebrity: "
# celebrity = gets.chomp()

# puts "Roses are #{color.downcase}"
# puts "#{plural_noun.capitalize} are blue"
# puts "I love #{celebrity.capitalize}"

#ARRAYS
#___________________________________________________________________________

# my_array = Array["Alex", "Jacobe", "Derek", "Tyler"]
# puts my_array[0,2]
# puts my_array[1]

# my_array = Array.new
# my_array[0] = "Zolson"
# puts my_array

my_array = Array["Tyler", "Derek", "Jacobe", "Alex"]
puts "Original Array: #{my_array}"
puts "Length of array: #{my_array.length}"
puts "Includes Zolson?: #{my_array.include? "Zolson"}"
puts "Sorted: #{my_array.sort()}"
