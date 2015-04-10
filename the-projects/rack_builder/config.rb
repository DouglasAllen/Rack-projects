require 'rack/builder'
require 'rack/commonlogger'
require 'rack/lobster'
require 'rack/server'
require 'rack/showexceptions'

app = Rack::Builder.new do
  use Rack::CommonLogger
  use Rack::ShowExceptions
  map "/lobster" do
    use Rack::Lint
    run Rack::Lobster.new
  end
end

s = Rack::Server.new(app: app, Port: 3000, Host: "localhost")
s.start