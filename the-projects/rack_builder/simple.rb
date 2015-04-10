require 'rack'

app = Rack::Builder.app do
  use Rack::CommonLogger
  run lambda { |env| [200, {'Content-Type' => 'text/plain'}, ['OK']] }
end

s = Rack::Server.new(app: app, Port: 3000, Host: "localhost")
s.start