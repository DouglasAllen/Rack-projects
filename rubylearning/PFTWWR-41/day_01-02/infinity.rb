require 'rack'

env = []
version = ["infinity 0.1"]
last = ["infinity beta 0.0"]

infinity = Proc.new {|env| [200, {"Content-Type" => "text/html"}, env]}
builder = Rack::Builder.new do
  use Rack::CommonLogger

  map '/' do
    run infinity
  end

  map '/version' do
    map '/' do
      run Proc.new {|env| [200, {"Content-Type" => "text/html"}, version]}
    end

    map '/last' do
      run Proc.new {|env| [200, {"Content-Type" => "text/html"}, last] }
    end
  end
end

Rack::Handler::Thin.run builder, :Port => 9292