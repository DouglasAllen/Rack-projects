# enter your latitude as first arg the longitude
# ruby rack_builder.rb 51.1789 -1.8264   (Stonehenge coordinates)

require 'equation_of_time'
require 'rack'
#~ require 'logger'
require 'thin'

app = Rack::Builder.new do
  @solar = Equation_of_Time.new
  @t = Time.now.utc
  @date = Date.parse(@t.year.to_s + "-" + @t.month.to_s + "-" + @t.day.to_s)
  @solar.date = @date
  @solar.jd = @date.jd
  @solar.ajd = @date.ajd
  @solar.latitude= ARGV[0].to_f
  @solar.longitude= ARGV[1].to_f
  use Rack::CommonLogger
  use Rack::ContentType, "text/html"
  run lambda { |env| [200, {}, ["<p><h2>Sunrise: #{@solar.display_time(@solar.sunrise_time(@solar.jd))[0..7]} UTC
 <p><h2>Sunset: #{@solar.display_time(@solar.sunset_time(@solar.jd))[0..7]} UTC" ]] }
end
 
Rack::Handler::Thin.run app, :Port => 8500