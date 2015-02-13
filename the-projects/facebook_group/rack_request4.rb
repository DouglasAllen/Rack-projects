# rack_request4.rb

class Ex4Request
  
  def call(env)
    req = Rack::Request.new(env)
    file = req.params['file']
    
    Rack::Response.new.finish do |res|
      res['Content-Type'] = 'text/plain'
      res.status = 200
      
      str = "Parameters sent: file - #{file}\n"
      res.write str
      lines = File.readlines(file)
      sorted_lines = "#{lines.sort.join()}"
      res.write sorted_lines
      # A list will also appear in the running server command shell.
      lines = lines.sort.join
      res.write puts lines
    end
  end
end

# shotgun 
#  curl -X POST -d 'file=alpha.txt' localhost:9393

