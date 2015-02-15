class Hello

  def self.call(env)
  
    req = Rack::Request.new(env)  # provides a ruby-esque
                                  # interface to the environment    
    res = Rack::Response.new      # allows us to assemble the
                                  # response incrementally.
    case req.path
    when "/"
      res.write "Hello World"     # We can also use multiple
                                  # res.write statements.      
    when "/datetime"
      res.write Time.now.rfc2822
    else
      res.status = 404            # We have to explicitly declare
                                  # the status to be 404      
      res.write "404 Not Found"
    end

    # We have to explicitly set the Content-Type otherwise it
    # defaults to text/html .
    res.headers["Content-Type"] = "text/plain"

    res.finish                    # This returns the tuple.
                                  # 200 is the default status                                
  end
  
end

run Hello

