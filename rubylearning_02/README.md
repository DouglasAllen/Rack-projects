===

   Rubylearning Day 02
   
-----------------------------------------------------------------------------------------------
```Ruby
    require 'sinatra'
 
    get '/' do
 
      'Hello Rubyists'
   
    end
```
-----------------------------------------------------------------------------------------------
```Ruby
     require 'sinatra'
 
     before do
 
       set :display_string, 'Welcome from RubyLearning again!'
 
     end
 
     get '/' do
 
       settings.display_string
   
     end
```
-----------------------------------------------------------------------------------------------
===

   Rubylearning Day 04

-----------------------------------------------------------------------------------------------
```Ruby
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

    # Render views/500.erb
    error do
      erb :'500'
    #  raise "Error happened!"
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
```
-----------------------------------------------------------------------------------------------
===

   Rubylearning Day 05

-----------------------------------------------------------------------------------------------
```Ruby
    require 'sinatra'

    get '/' do
      erb :home
    end

    post '/display' do
      erb :show
    end
```
-----------------------------------------------------------------------------------------------
===

   Rubylearning Day 05

-----------------------------------------------------------------------------------------------
```Ruby
    require 'sinatra'
    get '/' do
      erb :main
    end
```
-----------------------------------------------------------------------------------------------
```Html
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sinatra Application</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="RubyLearning.org" />
        <meta name="keywords" content="rubylearning,ruby,ruby programming,ruby course" />
        <link href="/stylesheets/style.css" rel="stylesheet" type="text/css" />
        <link rel="icon" type="image/ico" href="http://rubylearning.com/images/favicon.ico" />
      </head>
      <body>
        <%= yield %>
      </body>
    </html>
```
-----------------------------------------------------------------------------------------------         