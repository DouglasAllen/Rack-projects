# day2_1_e2.rb
 
 require 'sinatra'
 
 before do
 
   set :display_string, 'Welcome from RubyLearning again!'
 
 end
 
 get '/' do
 
#   'Hello Rubyists'
   settings.display_string
   
 end 
