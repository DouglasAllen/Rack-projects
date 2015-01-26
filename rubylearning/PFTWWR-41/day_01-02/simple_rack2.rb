# ruby simple_rack2.rb Hello_World
require 'rack'

ARGV[0] = "Hello World"
env = {}
env[:arg] = ARGV[0]
simple_rack2 =  lambda {
                        |env| [200,
                        {"Content-Type" => "text/html"},
                        ["Command line argument you typed was: #{env[:arg]}"]]
                       }

