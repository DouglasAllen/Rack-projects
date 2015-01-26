require 'rack'

infinity = Proc.new {|env| [200, {"Content-Type" => "text/html"}, env['rack.input']]}
builder = Rack::Builder.new do
  use Rack::CommonLogger
  run infinity
end
Rack::Handler::WEBrick.run builder, :Port => 9292