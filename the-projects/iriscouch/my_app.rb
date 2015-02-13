# my_app.rb

class MyApp
  $iris = "<a href='http://apsides.iriscouch.com/_utils/'>iriscouch.com</a>"
  $rl   = "<a href='http://rubylearning.org'>this</a>"
  $me   = "<a href='http://douglasallen.github.com/about_me/index.html'>I</a>"
  def call(env)	  
    [200,{"Content-Type" => "text/html"},
      ["</br>&nbsp;&nbsp;&nbsp;<b>",
      "#{$me} signed up for #{$iris} a while ago before taking #{$rl} course.</b>"]]
  end
end 
