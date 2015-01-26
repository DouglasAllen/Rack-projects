# ruby simple_rack.rb Hello_World

simple_rack = lambda {|env| [200,
              {"Content-Type" => "text/html"},
              ["ruby simple_rack.rb #{ARGV[0]}"]]}
	      
	      
puts simple_rack.call({})
puts "ARGV[0] is a #{ARGV[0].class} class"
