require 'sinatra'

class App < Sinatra::Base
  get '/hello/?:name?' do
    @name = params[:name] || "World"
    "<b>Hello #@name </b>!"
  end

  get "/delete/?:id?" do
    id = params[:id]
    "#{id}"
  end
end

# Sinatra includes Rack
app = Rack::Builder.new do
  run App
end

options = {app: app, server: "webrick", Port: 9393, Host: "0.0.0.0"}
Rack::Server.start options
