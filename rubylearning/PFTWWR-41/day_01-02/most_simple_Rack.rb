require 'rack'

class HelloWorld

  def self.call(env)
    [200, {'Content-Type' => 'text/html'}, ["Hello World!"]]
  end

end

new_object = HelloWorld
new_object.call({})
Rack::Handler::WEBrick.run new_object