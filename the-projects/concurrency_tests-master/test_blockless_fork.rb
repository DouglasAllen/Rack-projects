# test_blockless_fork.rb
pid = fork
if pid
  puts "A parent!"
else
  puts "A child!"
end
puts "The end of the method!"
