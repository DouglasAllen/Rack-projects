# ruby my_rack_method2.rb Hello_Rack_app

require 'rack'

$body = ["my_method called\n", "The time is #{Time.now}\n",
  "The command line argument you typed was: #{ARGV[0]}"]
  
def my_method(env)
  [200, {}, $body]
end

Rack::Server.new( { :Port => 8500, 
                    :server => 'webrick', 
                    :app => method(:my_method) } ).start

#end

=begin
              http://localhost:8500
	      
	            method called
              The time is 2012-03-07 17:01:35 -0600
              The command line argument you typed was: Hello_Rack_app
=end