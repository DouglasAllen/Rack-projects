#!/usr/bin/env ruby
# nethttp2.rb
require 'net/http'

=begin

	from:  	http://www.ruby-doc.org/stdlib-1.9.3/     >
		net/http: Ruby Standard Library
		Net::HTTPSession
		Simple Examples
=end

#GET
puts Net::HTTP.get('http://rubylearning.com/data/text.txt') # => String

#GET by URI
uri = URI('http://rubylearning.com/data/text.txt')
puts Net::HTTP.get(uri)

#GET with Dynamic Parameters
uri = URI('http://rubylearning.com/data/text.txt')
params = { :limit => 10, :page => 3 }
uri.query = URI.encode_www_form(params)

res = Net::HTTP.get_response(uri)
puts res.body if res.is_a?(Net::HTTPSuccess)
  

