# my_app.rb

class MyApp
  @t = Time.now.utc
  @@html = ["<p><h1>Welcome to all</h1>
  <p><h2>Rubylearning is awesome!</h2>
  <p><h2>The time is now</h2>
  <p><h2>#{@t}</h2>"]
  
  def call(env)
    [200, {"Content-Type" => "text/html"}, @@html]
  end
end