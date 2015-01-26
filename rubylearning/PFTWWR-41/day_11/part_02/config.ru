# config.ru
require './my_middleware'
require 'rack/lobster'
use MyMiddleware::Hello
run Rack::Lobster.new 
