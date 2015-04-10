
use Rack::Auth::Digest::MD5, "Hello, World", "12345" do |username|
  'secret'
end

run proc { |env|
  [200, { 'Content-Type' => "text/html" }, ['Logged in!']]
}

