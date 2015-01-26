require 'rack'

#~ Rack::Handler.constants

#~ Rack::Handler::WEBrick

$body = ["Hello. The time is #{Time.now}"]

my_rack_proc = lambda { |env| [200, {"Content-Type" => "text/plain"}, $body] }

server_hash = { :app => my_rack_proc, :server => 'webrick', :Port => 9876}
#~ Rack::Handler::WEBrick.run my_rack_proc

Rack::Server.new( server_hash ).start

=begin
Options may include:

:app
  a rack application to run (overrides :config)
:config
  a rackup configuration file path to load (.ru)
:environment
  this selects the middleware that will be wrapped around
  your application. Default options available are:
    - development: CommonLogger, ShowExceptions, and Lint
    - deployment: CommonLogger
    - none: no extra middleware
  note: when the server is a cgi server, CommonLogger is not included.
:server
  choose a specific Rack::Handler, e.g. cgi, fcgi, webrick
:daemonize
  if true, the server will daemonize itself (fork, detach, etc)
:pid
  path to write a pid file after daemonize
:Host
  the host address to bind to (used by supporting Rack::Handler)
:Port
  the port to bind to (used by supporting Rack::Handler)
:AccessLog
  webrick acess log options (or supporting Rack::Handler)
:debug
  turn on debug output ($DEBUG = true)
:warn
  turn on warnings ($-w = true)
:include
  add given paths to $LOAD_PATH
:require
  require the given libraries
=end