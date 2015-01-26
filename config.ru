
require 'rack/lobster'
#require_relative './'

map '/' do
  run Rack::Lobster.new
end

map '/lambda' do  
  run lambda {|env| [200,{},[env.inspect]]}
end

map '/hello' do  
  run lambda {|env| [200,{},["<h1>Hello All!</h1>"]]}
end