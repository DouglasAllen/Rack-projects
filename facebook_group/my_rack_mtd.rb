# my_rack_mtd.rb

require 'rack'

def words_reverse
  ARGV[0].nil? ? "Usage: ruby #{$0} 'command line string of words to be reversed' " :
  ARGV[0].split(" ").reverse!.join(" ")
end

def triplet(env)
  [200, {"Content-Type" => "text/plain"}, [words_reverse]]
end

Rack::Handler::Thin.run method(:triplet)

#  ruby my_rack_mtd.rb
#  ruby my_rack_mtd.rb 'command line string of words to be reversed'

