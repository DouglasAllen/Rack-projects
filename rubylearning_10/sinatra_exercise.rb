require 'sinatra'
get '/' do
  erb :input
end

post '/reverse_text' do
  erb :output
end 
