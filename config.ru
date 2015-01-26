
require 'rack/lobster'
#require_relative './'

map '/' do
  run Rack::Lobster.new
end

map '/lambda' do  
  run lambda {|env| [200,{},[env.inspect]]}
end

map '/hello' do  
  run lambda {|env| [200,{},["<h1>Hello All!</h1>"]]}
end

rack_app = lambda do |env|
  request  = Rack::Request.new(env)
  response = Rack::Response.new
  body = "---------------Header-------------<br/>"
  
  if request.get? == '/hi'
    body << "Saying hi"
    client = request['client']
    body << "from #{client}" if client
  else
    body << "#{request.path_info.nil?} You need to provide the client information"
  end
  body << "<br/>----------footer-----------------"
  response.body = [body]
  response.headers['Content-Length'] = body.bytesize.to_s
  response.to_a
end

map '/hi' do  
  run rack_app 
end

class Decorator

  def initialize(app)
    @app = app
  end

  def call(env)
    status, headers, body = @app.call(env)
    new_body = "-----------Header-------------<br/>"
    body.each { |str| new_body << str }
    new_body << "<br/>--------Footer--------------"
    [status, headers, [new_body]]
  end

end

map '/whatever' do
  rack_app = lambda{|env| [200, {'Content-Type' => 'text/html'}, ['<object height="350" width="425"><param name="movie" value="http://www.youtube.com/v/OdT9z-JjtJk&autoplay=1" /><embed height="350" src="http://www.youtube.com/v/OdT9z-JjtJk&autoplay=1" type="application/x-shockwave-flash" width="425"></embed></object>']]}  
  run Decorator.new(rack_app)
end