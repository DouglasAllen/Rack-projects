# config.ru
require './my_middleware'
use MyMiddleware::Hello # this comes in between
run Proc.new{|env|
		[200, {"Content-Type" => "text/html"},
		['<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
	              <html>
	                <head> <title>NOT OK!</title>
	                     <meta http-equiv="LOAD" content="0;url=http://localhost:9292/404.html">
	                </head>
	                <body> <h1>NOT OK!</h1>
	                </body>
		      </html>
                 ']]
             }
	     