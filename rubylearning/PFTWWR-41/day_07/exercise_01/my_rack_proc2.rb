# ruby my_rack_proc2.rb Hello_Rack_app

require 'rack'

my_rack_proc = lambda { |env| 
	       [200,
               {"Content-Type" => "text/plain"},
	       ["proc called\n","Hello. The time is #{Time.now}\n",
                "The command line argument you typed was: #{ARGV[0]}"]]}

Rack::Server.new( { :Port => 8500 , :server => 'webrick', :app => my_rack_proc} ).start



=begin
              http://localhost:8500
	      
	      proc called
              Hello. The time is 2012-03-07 17:01:35 -0600
              The command line argument you typed was: Hello_Rack_app
=end



