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
# puts my_array[0, 2]
# puts my_array[1]

# my_array = Array.new
# my_array[0] = "Zolson"
# puts my_array

# my_array = Array["Tyler", "Derek", "Jacobe", "Alex"]
# puts "Original Array: #{my_array}"
# puts "Length of array: #{my_array.length}"
# puts "Includes Zolson?: #{my_array.include? "Zolson"}"
# puts "Sorted: #{my_array.sort()}"

#HASHES
#___________________________________________________________________________
# states = {
#   :Connecticut => "CT",
#   :Massachussets => "MA",
#   :New_York => "NY",
#   :Oregon => "OR",
# }

# puts states
# puts states[:Oregon]

#METHODS
#___________________________________________________________________________
# def say_hi(name = "No Name", age = -1)
#   puts "Hello #{name} you are #{age.to_s}"
# end

# say_hi

#RETURN STATEMENTS
#___________________________________________________________________________
# def cube_number(num)
#    return num * num * num, "hello"
# end

# puts cube_number(2)

#IF STATEMENTS
#___________________________________________________________________________
# is_male = true
# is_tall = false

# if is_male and is_tall
#   puts "you are tall"
# else
#   puts "you are not tall"
# end

# if is_male or is_tall
#   puts "i greg"
# else
#   puts "nah man"
# end

# if is_male and is_tall
#   puts "Weather"
# elsif is_male and !is_tall
#   puts "wow"
# else
#   puts "geez"
# end

# def find_max(num1, num2, num3)
#   if num1 >= num2 and num1 >= num3
#     return num1
#   elsif num2 >= num1 and num2 >= num3
#     return num2
#   else
#     return num3
#   end
# end

# puts find_max(1, 29, 3)

#CASE EXPRESSION
#___________________________________________________________________________
# def get_day_name(day)
#   day_name = ""
#   case day
#     when "mon"
#       day_name = "Monday"
#     when "tue"
#       day_name = "Tuesday"
#     when "wed"
#       day_name = "Wednesday"
#     when "thu"
#       day_name = "Thursday"
#     when "fri"
#       day_name = "Friday"
#     when "sat"
#       day_name = "Satuday"
#     when "sun"
#       day_name = "Sunday"
#     else
#       day_name = "Invalid Abbrevation"
#   end

#   return day_name
# end

# puts get_day_name("sat")

#WHILE LOOPS
#___________________________________________________________________________
# index = 1
# while index <= 5
#   puts index
#   index += 1
# end

#GUESSING GAME
#___________________________________________________________________________
# word_list = ["Cheesecake", "Lasagna", "Stromboli", "Brownie"]
# secret_word = word_list.sample.to_s.chomp().downcase
# guess = ""
# guess_count = 0
# guess_limit = secret_word.length - 1
# out_of_guesses = false

# puts "The category is food"
# puts "The number of letters in my word: #{secret_word.length}"

# while guess != secret_word and !out_of_guesses
#   if guess_count < guess_limit
#     if guess_count > 0
#       puts "Hint: #{secret_word[0, guess_count]}"
#     end
#     puts "Enter your guess: "
#     guess = gets.chomp().downcase
#     guess_count += 1
#   else
#     out_of_guesses = true
#   end
# end

# if out_of_guesses
#   puts "You Lose nerd"
# else
#   puts "You Win!"
# end

#FOR LOOPS
#___________________________________________________________________________
# friends = ["Kevin", "Karen", "Oscar", "Angela", "Andy"]

# # for element in friends
# #   puts element
# # end

# # friends.each do |element|
# #   puts element
# # end

# #go through a specific number of times
# # for index in 0..5
# #   puts index
# # end

# # 6.times do |index|
# #   puts index
# # end

#EXPONENT METHOD
#___________________________________________________________________________

# def pow(base, power)
#   result = 1
#   power.times do
#     result = result * base
#   end
#   return result
# end

# puts pow(-5, 4)

#COMMENTS
#___________________________________________________________________________
=begin
this also works for
multiline
comments
=end
