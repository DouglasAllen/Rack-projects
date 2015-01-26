rack_time = lambda { |env| [200, {"Content-Type" => "text/plain"}, ["Hello. The time is #{Time.now}"]] }
builder = Rack::Builder.new do
  run rack_time
end
Rack::Handler::Thin.run builder, :Port => 9292