#net_html_uri_scan_doc.rb

require 'net/http'

url = 'http://ruby-metaprogramming.rubylearning.com/html/ruby_metaprogramming_1.html' 
                                                   # =&gt; String
pattern = /\bthe\b/i                               # =&gt; Regexp
doc = URI.parse(url)	                           # =&gt; URI::HTTP
html_string = Net::HTTP.get(doc)                   # =&gt; String
count = html_string.scan(pattern).size             # =&gt;  Fixnum
puts "The number of times the word 'the' appears in the document is #{count}."