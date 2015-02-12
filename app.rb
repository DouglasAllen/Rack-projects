require 'sinatra'

configure do
  Sinatra::Application.reset!
  use Rack::Reloader
end

get '/contact.html' do
  erb :contact, :layout => (request.xhr? ? false : :layout)
end

get '/index.html' do
  erb :index, :layout => (request.xhr? ? false : :layout)
end

get '/meetings.html' do
  erb :meetings, :layout => (request.xhr? ? false : :layout)
end

get '/Calcium40.pl' do
  erb :calendar, :layout => (request.xhr? ? false : :layout)
end

get '/Al-Anon.html' do
  erb :AlAnon, :layout => (request.xhr? ? false : :layout)
end

get '/cgi-bin/Al-Anon.html' do
  erb :AlAnon, :layout => (request.xhr? ? false : :layout)
end
