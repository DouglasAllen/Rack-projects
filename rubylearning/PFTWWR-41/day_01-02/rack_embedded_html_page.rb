require 'rack'
require 'rack/server'

# "Content-Type" => "text/html"
# "Content-Type" => "application/xhtml+xml"
class HelloWorld

  def initialize(str)
    @content = str
  end

  def response
    [200, {'Content-Type' => 'text/html'}, [@content]]
  end

end

$doc = <<"page"
<!DOCTYPE html>
<!-- saved from url=(0038)http://calm-plains-9022.herokuapp.com/ -->
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></meta>
    <title>Dosa Diner</title>
    <meta charset="utf-8"></meta>
    <link rel="stylesheet" src="dosasite.css"></link>
    <script>
        alert("Hello Course Participants");
     </script>
  </head>

  <body>
    <h1><img src="/dosa.jpg" alt=""></img>Diner</h1>
    <h2>The Restaurant</h2>
    <p>The Dosa Diner offers casual lunch and dinner fare in a hip atmosphere. The menu changes regularly to highlight the freshest ingredients.</p>

    <h2>Catering Services</h2>
    <p>You have fun... we'll do the cooking. Dosa Diner Catering can handle events from snacks for bridge club to elegant corporate fundraisers.</p>

    <h2>Location and Hours</h2>
    <p>Deccan Corner in Pune, India;
    Monday through Thursday 11am to 9pm, Friday and Saturday, 11am to midnight</p>
  </body>
</html>
page
	 
class HelloWorldApp
  def self.call(env)
    HelloWorld.new($doc).response
  end
end

# Rack::Static.new(options={:urls => ["/css", "/images"], :root => "public"}) 
Rack::Server.start(:app => HelloWorldApp, :urls => ["/css", "/images"], :root => "public" )



class EnvInspector
  def self.call(env)
    [200, {}, env.inspect]
  end
end

# Rack::Server.start :app => EnvInspector