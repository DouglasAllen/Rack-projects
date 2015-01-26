#!/usr/bin/env ruby
# nethttp1.rb
require 'net/http'

#url = URI.parse('http://rubylearning.com/data/text.txt')
url = URI.parse('http://www.gutenberg.org/files/22542/22542.txt')

Net::HTTP.start(url.host, url.port) do |http|
  req = Net::HTTP::Get.new(url.path)
  puts http.request(req).body
end 
