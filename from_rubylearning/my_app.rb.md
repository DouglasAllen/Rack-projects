```ruby
# my_app.rb

class MyApp
  def self.call env
    [200,
     {"Content-Type" => "text/html"},
     ["Hello Rack Hackers"]
    ]
  end
end

require 'rack'
app = Rack::Builder.new do
  run MyApp
end

options = {app: app, server: "webrick", Port: 9292, Host: "0.0.0.0"}
Rack::Server.start options

```