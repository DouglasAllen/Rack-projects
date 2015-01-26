
require 'rack'

my_rack_proc = lambda { |env| 
	               [200,
			{"Content-Type" => "text/plain"},
	                ["proc called\n","Hello. The time is #{Time.now}\n",
			 "The command line argument you typed was: #{ARGV[0]}"]
                       ]
                      }

run_hash = {:Port => 8500 ,
            :server => 'webrick', 
            :app => my_rack_proc}

Rack::Server.new( run_hash ).start

# ruby my_rack_proc2.rb "Hello Simple Rack app"
=begin
				http://localhost:8500
	      
		    proc called
				Hello. The time is 2013-01-11 17:01:35 -0600
				The command line argument you typed was: Hello_Rack_app
=end

