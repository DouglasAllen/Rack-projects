# test_single_exit_fork.rb
at_exit do
  puts "Made it to the end!"
end

fork do
  puts "A child!"
  exit!
end

puts "The end of the method!"
