# my_rack_proc1.rb
my_rack_proc = lambda { |env| [200, {"Content-Type" => "text/plain"},
["The number you entered on the command line is #{['zero', 'positive','negative'][ARGV[0].to_i <=> 0]}"]] }
puts my_rack_proc.call({})

# ruby my_rack_proc1.rb
# ruby my_rack_proc1.rb 0
# ruby my_rack_proc1.rb 1
# ruby my_rack_proc1.rb -1 
