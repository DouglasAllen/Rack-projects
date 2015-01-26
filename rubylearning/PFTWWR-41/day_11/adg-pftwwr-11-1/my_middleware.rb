# my_middleware.rb
module MyMiddleware
  class Hello
    def initialize(app)
      @app = app
    end

    def call(env)
      if env['PATH_INFO'] != '/'
	      # forward the request
               @app.call(env)
        
      else
	      [200,  {"Content-Type" => "text/html"},
	      ['<html>
                  <head>
                    <title>OK!</title>
                  <body>
                    <h1>
                      <img alt="big grin" width="99" height="99" src="http://rubylearning.org/class/pix/u/user100.png"/>
		      Okay!
                    </h1>		
                  </body>
                </html>']]
       
      end
    end
  end
end 
