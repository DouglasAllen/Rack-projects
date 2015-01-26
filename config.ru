
require 'rack/lobster'
#require_relative './'

map '/' do
  run Rack::Lobster.new
end

map '/proc' do  
  run lambda {|env| [200,{},[env.inspect]]}
end