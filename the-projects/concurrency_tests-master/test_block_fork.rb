# test_block_fork.rb
puts "In parent"
fork do
  puts "A child!"
end
puts "Still in parent"
puts "The end of the method!"
