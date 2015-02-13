# my_rack2.rb
require 'rack'
def my_method env
  [200, {}, ["method called"]]
end
Rack::Handler::Thin.run method(:my_method)

# ruby my_rack2.rb
