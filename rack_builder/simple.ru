app = Rack::Builder.app do
  use Rack::CommonLogger
  run lambda { |env| [200, {'Content-Type' => 'text/plain'}, ['OK']] }
end

run app