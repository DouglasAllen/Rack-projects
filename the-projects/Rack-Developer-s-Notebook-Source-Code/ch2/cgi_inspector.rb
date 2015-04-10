
require "rack"
require "thin"

cgi_inspector = lambda do |env|

  [200, {}, ["Your request:
              http method is #{env['REQUEST_METHOD']}
              path is #{env['PATH_INFO']}
              params is #{env['QUERY_STRING']}
            ]
  ]
end

app = Rack::Builder.new do
  run cgi_inspector
end

s = Rack::Server.new(AccessLog: [], Port: 3000, Host: 'localhost', app: app)
s.options.each {|o| p o}
s.start
