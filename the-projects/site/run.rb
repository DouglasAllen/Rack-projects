require 'rack'
app = Rack::Builder.new do
  use Rack::Static,
    :urls => ["/images", "/js", "/css"],
    :root => "public"

  status = 200
  header = { 'Content-Type'  => 'text/html',
             'Cache-Control' => 'public, max-age=86400' }
  body   = File.open('public/index.html', File::RDONLY)   
  run lambda { |env|
    [ status, header, body ]
  }
end

s = Rack::Server.new(app: app, Port: 3000, Host: "localhost")
s.start

