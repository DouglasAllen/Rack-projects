# test_wait_child.rb
pid = fork do
  puts "A child! (sleeping)"
  exit!
end

sleep 0.01

# Check if any child exited, but don't wait
status = Process.wait(-1, Process::WNOHANG)
if status
  puts "My child exited before I did!"
else
  puts "I executed first!"
end
