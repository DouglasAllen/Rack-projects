require 'rack/builder'
require 'rack/commonlogger'
require 'rack/lobster'
require 'rack/showexceptions'

app = Rack::Builder.new do
  use Rack::CommonLogger
  use Rack::ShowExceptions
  map "/lobster" do
    use Rack::Lint
    run Rack::Lobster.new
  end
end

run app