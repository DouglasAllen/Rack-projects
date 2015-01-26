=begin
		# config.ru
		require './my_request'
		run MyRequest.new
=end

# my_request.rb
class MyRequest
  def call(env)
	  
    req = Rack::Request.new(env)
    [200,
	  {"Content-Type" => "text/html"},
	  ["Send parameters using</br>"
	   "curl -X POST -d 'name=GD,nellA&text=!si esruoc siht emosewA' http://adg-pftwwr-41-8-2.heroku.com"]]
    name = req.params['name']
    text = req.params['text']

    Rack::Response.new.finish do |res|
      res['Content-Type'] = 'text/plain'
      res.status = 200
      str = "Parameters sent: name - #{name} | text - #{text}"
      strr = "Parameters reversed: name - #{name.reverse} | text - #{text.reverse}"
      res.write str << "\n" << strr    
    end
  end
end

=begin
		curl -X POST -d 'name=GD,nellA&text=!si esruoc siht emosewA' http://adg-pftwwr-41-8-2.heroku.com
		Parameters sent: name - GD,nellA | text - !si esruoc siht emosewA
		Parameters reversed: name - Allen,DG | text - Awesome this course is!
=end