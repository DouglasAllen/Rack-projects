#scan_html_doc.rb

require 'open-uri'
require 'hpricot'

html = Hpricot(open('http://satishtalim.github.com/webruby/chapter3.html'))
puts "Page title is: " + page.at(:title).inner_html


pattern = /\bthe\b/i      # => Regexp
#~ uri = URI.parse(doc)	  # => ?
html = Net::HTTP.get(uri) # => String

def scan_string(html, pattern)
  @count = html.scan(pattern).length
end

count = scan_string(html, pattern)

puts "The number of times the word 'the' appears in the document is #{count}."