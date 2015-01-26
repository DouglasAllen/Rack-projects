#pftwwr_41_13.rb
#Mongo Console
#mongo staff.mongohq.com:10081/pftwwr-41-13 -u <user> -p<password>

#Mongo URI
#mongodb://<user>:<password>@staff.mongohq.com:10081/pftwwr-41-13

require 'mongo'

db = Mongo::Connection.new('staff.mongohq.com', 10081).db("pftwwr-41-13")
auth = db.authenticate('rubylearning', 'day13')

table = db.collection("contacts")
table.remove()
doc = {:title => 'The Pale Blue Dot',:name => 'YouTube', :url => '<a href="http://www.youtube.com/watch?v=wupToqz1e2g">http://www.youtube.com/watch?v=wupToqz1e2g</a>'}
table.insert(doc)
doc = {:title => 'Carl Sagan',:name => 'CARLSAGAN', :url => '<a href="http://www.carlsagan.com/">http://www.carlsagan.com/</a>'}
table.insert(doc)
doc = {:title => 'Yukihiro Matsumoto',:name => 'MormonWiki', :url => '<a href="http://www.mormonwiki.com/Yukihiro_Matsumoto">http://www.mormonwiki.com/Yukihiro_Matsumoto</a>'}
table.insert(doc)
doc = {:title => 'The Power of Ruby',:name => 'Computer Science', :url => '<a href="https://cs.byu.edu/colloquia_files/2006Fall/presentations/Matz_slides/mgp00001.html">https://cs.byu.edu/colloquia_files/2006Fall/presentations/Matz_slides/mgp00001.html</a>'}
table.insert(doc)
doc = {:title => 'Jesus Christ',:name => 'Latter Day Saints(LDS)', :url => '<a href="http://lds.org">http://lds.org</a>'}
table.insert(doc)
doc = {:title => 'Jesus the Christ',:name => 'Project Gutenberg', :url => '<a href="http://www.gutenberg.org/files/22542/22542-h/22542-h.htm">http://www.gutenberg.org/files/22542/22542-h/22542-h.htm</a>'}
table.insert(doc)
doc = {:title => 'Joseph Scaliger',:name => 'Wikipedia', :url => '<a href="http://www.wikipedia.org/wiki/Joseph_Scaliger">http://www.wikipedia.org/wiki/Joseph_Scaliger</a>'}
table.insert(doc)
doc = {:title => 'The Julian Period',:name => 'PAUAHTUN', :url => '<a href="http://www.pauahtun.org/Calendar/julian_period.html">http://www.pauahtun.org/Calendar/julian_period.html</a>'}
table.insert(doc)
doc = {:title => 'Albert Einstein',:name => 'EINSTEIN', :url => '<a href="http://einstein.biz/">http://einstein.biz/</a>'}
table.insert(doc)
doc = {:title => 'Relativity : the Special and General Theory',:name => 'Project Gutenberg', :url => '<a href="http://www.gutenberg.org/cache/epub/5001/pg5001.html">http://www.gutenberg.org/cache/epub/5001/pg5001.html</a>'}
table.insert(doc)
doc = {:title => 'Fundamental Formulas of Physics',:name => '(2 vol.) D. H. Menzel, published by Dover', :url => '<a href="http://books.google.com/books/about/Fundamental_Formulas_of_Physics.html?id=QgswE2BicW4C">http://books.google.com/books/about/Fundamental_Formulas_of_Physics.html?id=QgswE2BicW4C</a>'}
table.insert(doc)
doc = {:title => 'Astronomy 161',:name => 'The Solar System', :url => '<a href="http://csep10.phys.utk.edu/astr161/lect/index.html">http://csep10.phys.utk.edu/astr161/lect/index.html</a>'}
table.insert(doc)
doc = {:title => 'Astronomy on the personal computer, Volum 1',:name => 'Per Oliver Montenbruck,Thomas Pfleger', :url => '<a href="http://books.google.es/books?id=WDjJIww337EC&pg=PA20&lpg=PA20&dq=julian+epoch+equinox&source=bl&ots=p8s-ilXgiV&sig=Y7PYY-JtJ0537ELO8BLJ7nNKjHk&hl=ca&ei=Cv1aSt3LH4_QjAex4bQb&sa=X&oi=book_result&ct=result&resnum=3#v=onepage&q=julian%20epoch%20equinox&f=false">http://books.google.es/books?id=WDjJIww337EC&pg=PA20&lpg=PA20&dq=julian+epoch+equinox&source=bl&ots=p8s-ilXgiV&sig=Y7PYY-JtJ0537ELO8BLJ7nNKjHk&hl=ca&ei=Cv1aSt3LH4_QjAex4bQb&sa=X&oi=book_result&ct=result&resnum=3#v=onepage&q=julian%20epoch%20equinox&f=false</a>'}
table.insert(doc)
 
table.find().each { |row| puts row.inspect }
