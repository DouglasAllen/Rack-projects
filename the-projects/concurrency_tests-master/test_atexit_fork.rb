# test_block_fork.rb

at_exit do
  puts "Made it to the end!"
end

fork do
  puts "A child!"
end

puts "The end of the method!"
