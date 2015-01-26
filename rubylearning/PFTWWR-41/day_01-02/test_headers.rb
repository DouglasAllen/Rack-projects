require 'sinatra/base'

class App < Sinatra::Base

  get '/' do
    "#{env.inspect}"
  end

end

#run App
