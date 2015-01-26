# hpricot_scan_doc.rb

require 'open-uri'
require 'hpricot'

url = 'http://ruby-metaprogramming.rubylearning.com/html/ruby_metaprogramming_1.html' # =&gt; String
pattern = /\bthe\b/i                            # =&gt; Regexp
doc = Hpricot(open(url))                        # =&gt; Hpricot::Doc
html_string = doc.to_s                          # =&gt; String
count = html_string.scan(pattern).size          # =&gt;  Fixnum
puts "The number of times the word 'the' appears in the document is #{count}."