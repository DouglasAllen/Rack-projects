```ruby
require 'sinatra'

class App < Sinatra::Base
  get '/' do
    <<EOF
<h1>Hello!</h1><br/>
<h2>I 'm a simple Sinatra application.</h2><br/>
<h2>I 'm running in Ruby.</h2><br/>
<h3>This is a get '/' block.</h3><br/>
<h4>test h4</h4><br/>
<a href="file:///home/">link</a>
EOF
  end

  get '/hello/:name' do |n|
    "Hello #{n}!"
  end

  get '/say/*/to/*' do
    # matches /say/Hello/to/World!
    # params[:splat] # => ["Hello ", "World!"]
    params[:splat].join(' ') # => Hello World!
  end

  class Stream
    def each
      100.times { |i| yield "#{i}\n" }
    end
  end

  get('/stream') { Stream.new }

end

# Sinatra includes Rack
app = Rack::Builder.new do
  run App
end

options = {app: app, server: "webrick", Port: 9393, Host: "0.0.0.0"}
Rack::Server.start options

```