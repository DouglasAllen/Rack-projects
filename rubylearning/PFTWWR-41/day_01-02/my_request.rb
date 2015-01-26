# my_request.rb

class MyRequest
  def call(env)
    req = Rack::Request.new(env)
	 
	 req.get? name = req.params["name"]
	 req.get? text = req.params["text"]
	 #~ if req.get? 
		 #~ name = "my" 
       #~ text = "data"		 
	 #~ end    

    Rack::Response.new.finish do |res|
      res['Content-Type'] = 'text/plain'
      res.status = 200
		#~ if req.post? 
        #~ name = req.params["name"]
	     #~ text = req.params["text"]
	   #~ end
      res.write "Parameters sent: name - #{name} | text - #{text}"
		res.write "Parameters reversed: name - #{name.reverse} | text - #{text.reverse}"
	 end
  end
end

# rackup my_request.ru

# require './my_request'
# run MyRequest.new

# curl -X POST -d 'name=GD,nellA&text=!emosewa si gninraelybuR' localhost:9292