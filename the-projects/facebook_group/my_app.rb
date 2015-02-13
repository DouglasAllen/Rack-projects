# my_app.rb

class MyApp

  attr_accessor :input_str
  
  def initialize(str= '')
    @input_str = str
  end
  
  def words_reverse(str='')    
    str.split(" ").reverse!.join(" ")
  end

  
  def call(env)
    [200, {"Content-Type" => "text/html"}, [
     "<head>",
     "<link rel='stylesheet' href='./public/stylesheets/style.css'/>",
     "</head>",
     "<body>",
     "<h1>Reverse Word Order in Sentence Service</h1>",
     "<p>The initial sentence was: <b class=\'foo\'>#{@input_str}</b></p>",
     "<p>The result is: <b class=\'bar\'>" + words_reverse(@input_str)+ "</b></p>",
     "<h2>And the coder is doubled up with laughter.</h2>",
     "</body>"]]
  end
  
end

# config.ru

#require './my_app'
#run MyApp.new('globe! the around from Participants Rack Hello')

