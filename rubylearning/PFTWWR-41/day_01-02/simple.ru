# config.ru
# Usage: rackup <arg> config.ru
run lambda { |env| 
	     [200,
	     {"Content-Type" => "text/plain"},
	     ["Hello. The command line argument you entered is #{ARGV[0]}"]] 
           }