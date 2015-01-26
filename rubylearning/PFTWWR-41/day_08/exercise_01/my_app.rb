# my_app.rb
# 
$rl = "<a href='http://rubylearning.org/class/mod/resource/view.php?id=2878'>Ruby Learning</a>"
$me = "<a href='http://douglasallen.github.com/about_me/index.html'>I</a>"
$trisp = "</br>&nbsp;&nbsp;&nbsp;"
class MyApp
	
  def call(env)
          [200,
	  {"Content-Type" => "text/html"},
#	  {"Content-Type" => "text/plain"}, 
	  ["#{$trisp}<b>Hello #{$rl} Participants from all across the globe.</br>",
	   "#{$trisp}The time there is #{Time.now}</br>",
	   "#{$trisp}The Command line argument that #{$me} typed was: #{ARGV[0]}</b>"]]
  end
end

=begin
              config.ru
	      
	      require './my_app'
	      run MyApp.new
	      
	      >rackup Hello_Rack_app config.ru
	      
	      url=http://localhost:9292
	      
	      Hello Ruby Learning Participants from all across the globe.
	      
              The time there is 2012-03-08 14:06:20 -0600
	      
	      The Command line argument that I typed was: Hello_Rack_app

	      heroku url = http://adg-pftwwr-41-8-1.heroku.com
=end