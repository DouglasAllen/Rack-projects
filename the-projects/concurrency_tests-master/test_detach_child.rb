# test_fork_child.rb
at_exit do
  puts "Made it to the end!"
end

pid = fork do
  puts "A child!"
  exit!
end

# You can 'detach' the child to let the OS know you don't
# care about its return status.
Process.detach(pid)

puts "The end of the method!"
