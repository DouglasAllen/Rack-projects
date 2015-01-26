#scan_html_doc.rb

require 'open-uri'
require 'nokogiri'

html = Nokogiri::HTML(open('http://satishtalim.github.com/webruby/chapter3.html'))
pattern = /\bthe\b/i 

def scan_string(html, pattern)  
  @count = html.text.scan(pattern).length
end

count = scan_string(html, pattern)

puts "The number of times the word 'the' appears in the document is #{count}."