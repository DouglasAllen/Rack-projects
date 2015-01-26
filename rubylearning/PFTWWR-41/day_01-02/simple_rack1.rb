require 'rack'

my_rack_proc = lambda {
                       |env| #block
                       [
                        # status
                        200,
                        # header
                        {"Content-Type" => "text/html"}, 
                        # body
                         [
<<EOF
<h1>Hello!</h1><br/>
<h2>I 'm a simple Rack application.</h2><br/>
<h2>I 'm running in Ruby.</h2><br/>
<h3>This is a lambda which creates a new Proc object.</h3><br/>
<h3>My header says "Content-Type" => "text/html"</h3>
<h4>So I may display on your browser that way.</h4>
<h4>test h4</h4><br/>
<a href="https://gist.github.com/4082756">Put me back when you're done.</a>
EOF
                          ]
                         ]
                        }


#~ p my_rack_proc.call({})
Rack::Handler::WEBrick.run my_rack_proc