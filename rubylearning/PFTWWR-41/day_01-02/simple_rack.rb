# ruby simple_rack.rb Hello_World

ARGV[0] = "Hello. The time is #{Time.now}" if ARGV[0].nil?
env = {}
env[:arg] = ARGV[0]
simple_rack = lambda {|env| 
                      [200,
                       {"Content-Type" => "text/html"},
                       ["ruby simple_rack.rb #{env[:arg]}"]
                      ]
                     }

puts simple_rack.call(env)

#~ puts "ARGV[0] is a #{ARGV[0].class} class"