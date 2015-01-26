#scan_html_doc.rb

require 'net/http'

doc = 'http://satishtalim.github.com/webruby/chapter3.html'

pattern = /\bthe\b/i      # => Regexp
uri = URI.parse(doc)	  # => ?
html = Net::HTTP.get(uri) # => String

def scan_string(html, pattern)
  page_array = html.split     #html.split( pattern=$;, [ limit ] ) -> anArray
  #p page_array
  array_for_the = page_array.grep(pattern)
  p array_for_the
  #p array_for_the.length
   @count = array_for_the.length
end

count = scan_string(html, pattern)

puts "The number of times the word 'the' appears in the document is #{count}."