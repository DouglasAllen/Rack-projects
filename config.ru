require 'rack'
require 'rack/lobster'
require_relative './AA_District_71_Area_20/app'

app = Rack::Builder.new do
  use Rack::Reloader
  map '/' do
    # This is the root of our app
    @root = File.expand_path(File.dirname(__FILE__))
    run lambda {|env| Rack::Directory.new(@root).call(env)} 
  end

  map '/world' do
    run lambda {|env| [200, {'Content-Type' => 'text/html'}, ["<h1></h1>"]]}
  end

  map '/heartbeat' do
    run lambda {|env| [200, {'Content-Type' => 'text/html'}, ["<h1></h1>"]]}
  end

  map '/hello' do
    run lambda {|env| [200, {'Content-Type' => 'text/html'}, ["<h1></h1>"]]}
  end

  map '/lobster' do
    app = Rack::Lobster.new
    run app
  end

  map '/env' do  
    run lambda {|env| [200,{}, ["<h1>#{env.each {|k, v| "#{k}  #{v}</br>"}}</h1> "]]}
  end

  class Heartbeat
    def self.call(env)
      [200, { "Content-Type" => "text/html" }, ["<h1>/hello /lobster /root /env /world</h1>"]]
    end
  end

  map '/' do
    run Heartbeat
  end

  decorator = lambda do |env|
    request  = Rack::Request.new(env)
    response = Rack::Response.new
    body = "---------------Header-------------"
  
    if request.path_info == ""
      body << "Saying hi"
      client = request['client']
      body << "from #{client}" if client
    else
      body << "You need to provide the client information"
    end

    body << "</br>----------footer-----------------"
    response.body = [body]
    response.headers['Content-Length'] = body.bytesize.to_s
    response.to_a
  end

  map '/hi' do  
    run decorator 
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
    rack_app = lambda{|env| [200, {'Content-Type' => 'text/html'}, 
                            ['<object height="350" width="425">
                                <param name="movie" value="http://www.youtube.com/v/OdT9z-JjtJk&autoplay=1" />
                                <embed height="350" src="http://www.youtube.com/v/OdT9z-JjtJk&autoplay=1" type="application/x-shockwave-flash" width="425">
                                </embed>
                              </object>'
                             ]]}  
    run Decorator.new(rack_app)
  end

  class AAsite
    def self.call(env)
      [200, { "Content-Type" => "text/html" }, ["./AA_District_71_Area_20/app"]]
    end
  end

  map '/' do
    run AAsite
  end

end.to_app

run app



