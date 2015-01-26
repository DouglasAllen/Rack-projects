# my_middleware1.ru
require './my_middleware1'
use MyMiddleware::Hello # this comes in between
run lambda{|env| [404,
                   {"Content-Type" => "text/html"},
                   ['<h1>NOT OK!</h1>']]
                 }
