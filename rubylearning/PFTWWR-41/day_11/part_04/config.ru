# config.ru
require 'date'
require 'logger'
rack_time = Proc.new { |env| [200,
		     {"Content-Type" => "text/plain"},
		     ["Hello. The time is #{Time.now.utc}\n",
		      "The Julian Day Number is #{Date.new(Time.now.utc.year, Time.now.utc.month, Time.now.utc.day).jd}"]] }
builder = Rack::Builder.new do
  use Rack::CommonLogger
  Logger.new('rack.log')
  run rack_time
end
Rack::Handler::WEBrick.run builder, :Port => 9292