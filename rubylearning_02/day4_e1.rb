# day4_e1.rb

require 'sinatra'

set :display_string, '<link href="/stylesheets/style.css" rel="stylesheet" type="text/css" /><p>Hello from RubyLearning again!</p>'
 
helpers do
  def human_date(datetime)
      datetime.strftime('%d|%m|%Y').gsub(/ 0(\d{1})/, ' \1')
  end
end

get '/hello' do
  '<link href="/stylesheets/style.css" rel="stylesheet" type="text/css" /> 
  <p>Hello Rubyists</p>'   
end

get '/again' do 
  settings.display_string   
end 
 
get '/' do
  erb :index  
end

post '/display' do
  erb :show
end

get '/rlpage' do
  erb :main  
end

get '/helperspage' do
  erb :time1  
end

not_found do
  erb :'404'
end

error do
  erb :'500'
end

get '/rle' do
  erb :'500'
end

get '/request' do
  request.class.inspect
end

get '/service' do
  erb :service
end

post '/reverse' do
  erb :reverse
end



