# nokogiri_scan_doc.rb

require 'nokogiri'
require 'open-uri'

url = 'http://ruby-metaprogramming.rubylearning.com/html/ruby_metaprogramming_1.html' 
                                                 # =&gt; String
pattern = /\bthe\b/i                             # =&gt; Regexp
doc = Nokogiri::HTML(open(url))                  # =&gt;Nokogiri::HTML::Document
html_string = doc.to_s
count = html_string.scan(pattern).size           # =&gt;  Fixnum
puts "The number of times the word 'the' appears in the document is #{count}."