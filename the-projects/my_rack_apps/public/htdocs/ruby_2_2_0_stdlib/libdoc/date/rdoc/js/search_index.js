var search_data = {"index":{"searchIndex":["date","datetime","time","+()","-()","<<()","<=>()","===()",">>()","_httpdate()","_iso8601()","_jisx0301()","_parse()","_rfc2822()","_rfc3339()","_rfc822()","_strptime()","_strptime()","_xmlschema()","ajd()","amjd()","asctime()","civil()","civil()","commercial()","commercial()","ctime()","cwday()","cweek()","cwyear()","day()","day_fraction()","downto()","england()","friday?()","gregorian()","gregorian?()","gregorian_leap?()","httpdate()","httpdate()","httpdate()","inspect()","iso8601()","iso8601()","iso8601()","iso8601()","italy()","jd()","jd()","jd()","jisx0301()","jisx0301()","jisx0301()","jisx0301()","julian()","julian?()","julian_leap?()","ld()","leap?()","leap?()","mday()","mjd()","mon()","monday?()","month()","new()","new()","new_start()","next()","next_day()","next_month()","next_year()","now()","ordinal()","ordinal()","parse()","parse()","prev_day()","prev_month()","prev_year()","rfc2822()","rfc2822()","rfc2822()","rfc3339()","rfc3339()","rfc3339()","rfc3339()","rfc822()","rfc822()","rfc822()","saturday?()","start()","step()","strftime()","strftime()","strptime()","strptime()","succ()","sunday?()","thursday?()","to_date()","to_date()","to_date()","to_datetime()","to_datetime()","to_datetime()","to_s()","to_s()","to_time()","to_time()","to_time()","today()","tuesday?()","upto()","valid_civil?()","valid_commercial?()","valid_date?()","valid_jd?()","valid_ordinal?()","wday()","wednesday?()","xmlschema()","xmlschema()","xmlschema()","xmlschema()","yday()","year()"],"longSearchIndex":["date","datetime","time","date#+()","date#-()","date#<<()","date#<=>()","date#===()","date#>>()","date::_httpdate()","date::_iso8601()","date::_jisx0301()","date::_parse()","date::_rfc2822()","date::_rfc3339()","date::_rfc822()","date::_strptime()","datetime::_strptime()","date::_xmlschema()","date#ajd()","date#amjd()","date#asctime()","date::civil()","datetime::civil()","date::commercial()","datetime::commercial()","date#ctime()","date#cwday()","date#cweek()","date#cwyear()","date#day()","date#day_fraction()","date#downto()","date#england()","date#friday?()","date#gregorian()","date#gregorian?()","date::gregorian_leap?()","date#httpdate()","date::httpdate()","datetime::httpdate()","date#inspect()","date::iso8601()","date#iso8601()","datetime#iso8601()","datetime::iso8601()","date#italy()","date::jd()","date#jd()","datetime::jd()","date::jisx0301()","date#jisx0301()","datetime#jisx0301()","datetime::jisx0301()","date#julian()","date#julian?()","date::julian_leap?()","date#ld()","date::leap?()","date#leap?()","date#mday()","date#mjd()","date#mon()","date#monday?()","date#month()","date::new()","datetime::new()","date#new_start()","date#next()","date#next_day()","date#next_month()","date#next_year()","datetime::now()","date::ordinal()","datetime::ordinal()","date::parse()","datetime::parse()","date#prev_day()","date#prev_month()","date#prev_year()","date#rfc2822()","date::rfc2822()","datetime::rfc2822()","date#rfc3339()","date::rfc3339()","datetime::rfc3339()","datetime#rfc3339()","date#rfc822()","date::rfc822()","datetime::rfc822()","date#saturday?()","date#start()","date#step()","date#strftime()","datetime#strftime()","date::strptime()","datetime::strptime()","date#succ()","date#sunday?()","date#thursday?()","date#to_date()","datetime#to_date()","time#to_date()","date#to_datetime()","datetime#to_datetime()","time#to_datetime()","date#to_s()","datetime#to_s()","date#to_time()","datetime#to_time()","time#to_time()","date::today()","date#tuesday?()","date#upto()","date::valid_civil?()","date::valid_commercial?()","date::valid_date?()","date::valid_jd?()","date::valid_ordinal?()","date#wday()","date#wednesday?()","date::xmlschema()","date#xmlschema()","datetime#xmlschema()","datetime::xmlschema()","date#yday()","date#year()"],"info":[["Date","","Date.html","","<p>date and datetime class - Tadayoshi Funaba 1998-2011\n<p>‘date’ provides two classes Date and DateTime.\n<p>Terms …\n"],["DateTime","","DateTime.html","","<p>datetime\n"],["Time","","Time.html","",""],["+","Date","Date.html#method-i-2B","(p1)","<p>Returns a date object pointing other days after self.  The other should be\na numeric value.  If the other …\n"],["-","Date","Date.html#method-i-2D","(p1)","<p>Returns the difference between the two dates if the other is a date object.\nIf the other is a numeric …\n"],["<<","Date","Date.html#method-i-3C-3C","(p1)","<p>Returns a date object pointing n months before self.  The n should be a\nnumeric value.\n\n<pre>Date.new(2001,2,3) ...</pre>\n"],["<=>","Date","Date.html#method-i-3C-3D-3E","(p1)","<p>Compares the two dates and returns -1, zero, 1 or nil.  The other should be\na date object or a numeric …\n"],["===","Date","Date.html#method-i-3D-3D-3D","(p1)","<p>Returns true if they are the same day.\n\n<pre>Date.new(2001,2,3) === Date.new(2001,2,3)\n                     ...</pre>\n"],[">>","Date","Date.html#method-i-3E-3E","(p1)","<p>Returns a date object pointing n months after self.  The n should be a\nnumeric value.\n\n<pre>Date.new(2001,2,3) ...</pre>\n"],["_httpdate","Date","Date.html#method-c-_httpdate","(p1)","<p>Returns a hash of parsed elements.\n"],["_iso8601","Date","Date.html#method-c-_iso8601","(p1)","<p>Returns a hash of parsed elements.\n"],["_jisx0301","Date","Date.html#method-c-_jisx0301","(p1)","<p>Returns a hash of parsed elements.\n"],["_parse","Date","Date.html#method-c-_parse","(*args)","<p>Parses the given representation of date and time, and returns a hash of\nparsed elements.  This method …\n"],["_rfc2822","Date","Date.html#method-c-_rfc2822","(p1)","<p>Returns a hash of parsed elements.\n"],["_rfc3339","Date","Date.html#method-c-_rfc3339","(p1)","<p>Returns a hash of parsed elements.\n"],["_rfc822","Date","Date.html#method-c-_rfc822","(p1)","<p>Returns a hash of parsed elements.\n"],["_strptime","Date","Date.html#method-c-_strptime","(*args)","<p>Parses the given representation of date and time with the given template,\nand returns a hash of parsed …\n"],["_strptime","DateTime","DateTime.html#method-c-_strptime","(*args)","<p>Parses the given representation of date and time with the given template,\nand returns a hash of parsed …\n"],["_xmlschema","Date","Date.html#method-c-_xmlschema","(p1)","<p>Returns a hash of parsed elements.\n"],["ajd","Date","Date.html#method-i-ajd","()","<p>Returns the astronomical Julian day number.  This is a fractional number,\nwhich is not adjusted by the …\n"],["amjd","Date","Date.html#method-i-amjd","()","<p>Returns the astronomical modified Julian day number.  This is a fractional\nnumber, which is not adjusted …\n"],["asctime","Date","Date.html#method-i-asctime","()","<p>Returns a string in asctime(3) format (but without “n0” at the end).  This\nmethod is equivalent …\n"],["civil","Date","Date.html#method-c-civil","(p1 = v1, p2 = v2, p3 = v3, p4 = v4)","<p>Creates a date object denoting the given calendar date.\n<p>In this class, BCE years are counted astronomically. …\n"],["civil","DateTime","DateTime.html#method-c-civil","(p1 = v1, p2 = v2, p3 = v3, p4 = v4, p5 = v5, p6 = v6, p7 = v7, p8 = v8)","<p>Creates a date-time object denoting the given calendar date.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">DateTime</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>)    <span class=\"ruby-comment\">#=&gt; #&lt;DateTime: ...</span>\n</pre>\n"],["commercial","Date","Date.html#method-c-commercial","(p1 = v1, p2 = v2, p3 = v3, p4 = v4)","<p>Creates a date object denoting the given week date.\n<p>The week and the day of week should be a negative …\n"],["commercial","DateTime","DateTime.html#method-c-commercial","(p1 = v1, p2 = v2, p3 = v3, p4 = v4, p5 = v5, p6 = v6, p7 = v7, p8 = v8)","<p>Creates a date-time object denoting the given week date.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">DateTime</span>.<span class=\"ruby-identifier\">commercial</span>(<span class=\"ruby-value\">2001</span>) <span class=\"ruby-comment\">#=&gt; #&lt;DateTime: 2001-01-01T00:00:00+00:00 ...</span>\n</pre>\n"],["ctime","Date","Date.html#method-i-ctime","()","<p>Returns a string in asctime(3) format (but without “n0” at the end).  This\nmethod is equivalent …\n"],["cwday","Date","Date.html#method-i-cwday","()","<p>Returns the day of calendar week (1-7, Monday is 1).\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>).<span class=\"ruby-identifier\">cwday</span>          <span class=\"ruby-comment\">#=&gt; 6</span>\n</pre>\n"],["cweek","Date","Date.html#method-i-cweek","()","<p>Returns the calendar week number (1-53).\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>).<span class=\"ruby-identifier\">cweek</span>          <span class=\"ruby-comment\">#=&gt; 5</span>\n</pre>\n"],["cwyear","Date","Date.html#method-i-cwyear","()","<p>Returns the calendar week based year.\n\n<pre>Date.new(2001,2,3).cwyear         #=&gt; 2001\nDate.new(2000,1,1).cwyear ...</pre>\n"],["day","Date","Date.html#method-i-day","()","<p>Returns the day of the month (1-31).\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>).<span class=\"ruby-identifier\">mday</span>           <span class=\"ruby-comment\">#=&gt; 3</span>\n</pre>\n"],["day_fraction","Date","Date.html#method-i-day_fraction","()","<p>Returns the fractional part of the day.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">DateTime</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>,<span class=\"ruby-value\">12</span>).<span class=\"ruby-identifier\">day_fraction</span>    <span class=\"ruby-comment\">#=&gt; (1/2)</span>\n</pre>\n"],["downto","Date","Date.html#method-i-downto","(p1)","<p>This method is equivalent to step(min, -1){|date| …}.\n"],["england","Date","Date.html#method-i-england","()","<p>This method is equivalent to new_start(Date::ENGLAND).\n"],["friday?","Date","Date.html#method-i-friday-3F","()","<p>Returns true if the date is Friday.\n"],["gregorian","Date","Date.html#method-i-gregorian","()","<p>This method is equivalent to new_start(Date::GREGORIAN).\n"],["gregorian?","Date","Date.html#method-i-gregorian-3F","()","<p>Retunrs true if the date is on or after the day of calendar reform.\n\n<pre>Date.new(1582,10,15).gregorian?   ...</pre>\n"],["gregorian_leap?","Date","Date.html#method-c-gregorian_leap-3F","(p1)","<p>Returns true if the given year is a leap year of the proleptic Gregorian\ncalendar.\n\n<pre>Date.gregorian_leap?(1900) ...</pre>\n"],["httpdate","Date","Date.html#method-i-httpdate","()","<p>This method is equivalent to strftime(‘%a, %d %b %Y %T GMT’). See also RFC\n2616.\n"],["httpdate","Date","Date.html#method-c-httpdate","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some RFC\n2616 format.\n\n<pre>Date.httpdate('Sat, ...</pre>\n"],["httpdate","DateTime","DateTime.html#method-c-httpdate","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some RFC\n2616 format.\n\n<pre>DateTime.httpdate('Sat, ...</pre>\n"],["inspect","Date","Date.html#method-i-inspect","()","<p>Returns the value as a string for inspection.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>).<span class=\"ruby-identifier\">inspect</span>\n          <span class=\"ruby-comment\">#=&gt; &quot;#&lt;Date: 2001-02-03 ...</span>\n</pre>\n"],["iso8601","Date","Date.html#method-c-iso8601","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical ISO 8601 formats.\n\n<pre>Date.iso8601('2001-02-03') ...</pre>\n"],["iso8601","Date","Date.html#method-i-iso8601","()","<p>This method is equivalent to strftime(‘%F’).\n"],["iso8601","DateTime","DateTime.html#method-i-iso8601","(p1 = v1)","<p>This method is equivalent to strftime(‘%FT%T’).  The optional argument n is\nlength of fractional seconds. …\n"],["iso8601","DateTime","DateTime.html#method-c-iso8601","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical ISO 8601 formats.\n\n<pre>DateTime.iso8601('2001-02-03T04:05:06+07:00') ...</pre>\n"],["italy","Date","Date.html#method-i-italy","()","<p>This method is equivalent to new_start(Date::ITALY).\n"],["jd","Date","Date.html#method-c-jd","(p1 = v1, p2 = v2)","<p>Creates a date object denoting the given chronological Julian day number.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">jd</span>(<span class=\"ruby-value\">2451944</span>)          <span class=\"ruby-comment\">#=&gt; ...</span>\n</pre>\n"],["jd","Date","Date.html#method-i-jd","()","<p>Returns the Julian day number.  This is a whole number, which is adjusted\nby the offset as the local …\n"],["jd","DateTime","DateTime.html#method-c-jd","(p1 = v1, p2 = v2, p3 = v3, p4 = v4, p5 = v5, p6 = v6)","<p>Creates a datetime object denoting the given chronological Julian day\nnumber.\n\n<pre>DateTime.jd(2451944)    ...</pre>\n"],["jisx0301","Date","Date.html#method-c-jisx0301","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical JIS X 0301 formats.\n\n<pre>Date.jisx0301('H13.02.03') ...</pre>\n"],["jisx0301","Date","Date.html#method-i-jisx0301","()","<p>Returns a string in a JIS X 0301 format.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>).<span class=\"ruby-identifier\">jisx0301</span>       <span class=\"ruby-comment\">#=&gt; &quot;H13.02.03&quot;</span>\n</pre>\n"],["jisx0301","DateTime","DateTime.html#method-i-jisx0301","(p1 = v1)","<p>Returns a string in a JIS X 0301 format.  The optional argument n is length\nof fractional seconds.\n\n<pre>DateTime.parse('2001-02-03T04:05:06.123456789+07:00').jisx0301(9) ...</pre>\n"],["jisx0301","DateTime","DateTime.html#method-c-jisx0301","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical JIS X 0301 formats.\n\n<pre>DateTime.jisx0301('H13.02.03T04:05:06+07:00') ...</pre>\n"],["julian","Date","Date.html#method-i-julian","()","<p>This method is equivalent to new_start(Date::JULIAN).\n"],["julian?","Date","Date.html#method-i-julian-3F","()","<p>Retruns true if the date is before the day of calendar reform.\n\n<pre>Date.new(1582,10,15).julian?           ...</pre>\n"],["julian_leap?","Date","Date.html#method-c-julian_leap-3F","(p1)","<p>Returns true if the given year is a leap year of the proleptic Julian\ncalendar.\n\n<pre>Date.julian_leap?(1900) ...</pre>\n"],["ld","Date","Date.html#method-i-ld","()","<p>Returns the Lilian day number.  This is a whole number, which is adjusted\nby the offset as the local …\n"],["leap?","Date","Date.html#method-c-leap-3F","(p1)","<p>Returns true if the given year is a leap year of the proleptic Gregorian\ncalendar.\n\n<pre>Date.gregorian_leap?(1900) ...</pre>\n"],["leap?","Date","Date.html#method-i-leap-3F","()","<p>Returns true if the year is a leap year.\n\n<pre>Date.new(2000).leap?      #=&gt; true\nDate.new(2001).leap?      ...</pre>\n"],["mday","Date","Date.html#method-i-mday","()","<p>Returns the day of the month (1-31).\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>).<span class=\"ruby-identifier\">mday</span>           <span class=\"ruby-comment\">#=&gt; 3</span>\n</pre>\n"],["mjd","Date","Date.html#method-i-mjd","()","<p>Returns the modified Julian day number.  This is a whole number, which is\nadjusted by the offset as the …\n"],["mon","Date","Date.html#method-i-mon","()","<p>Returns the month (1-12).\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>).<span class=\"ruby-identifier\">mon</span>            <span class=\"ruby-comment\">#=&gt; 2</span>\n</pre>\n"],["monday?","Date","Date.html#method-i-monday-3F","()","<p>Returns true if the date is Monday.\n"],["month","Date","Date.html#method-i-month","()","<p>Returns the month (1-12).\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>).<span class=\"ruby-identifier\">mon</span>            <span class=\"ruby-comment\">#=&gt; 2</span>\n</pre>\n"],["new","Date","Date.html#method-c-new","(p1 = v1, p2 = v2, p3 = v3, p4 = v4)","<p>Creates a date object denoting the given calendar date.\n<p>In this class, BCE years are counted astronomically. …\n"],["new","DateTime","DateTime.html#method-c-new","(p1 = v1, p2 = v2, p3 = v3, p4 = v4, p5 = v5, p6 = v6, p7 = v7, p8 = v8)","<p>Creates a date-time object denoting the given calendar date.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">DateTime</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>)    <span class=\"ruby-comment\">#=&gt; #&lt;DateTime: ...</span>\n</pre>\n"],["new_start","Date","Date.html#method-i-new_start","(p1 = v1)","<p>Duplicates self and resets its the day of calendar reform.\n\n<pre>d = Date.new(1582,10,15)\nd.new_start(Date::JULIAN) ...</pre>\n"],["next","Date","Date.html#method-i-next","()","<p>Returns a date object denoting the following day.\n"],["next_day","Date","Date.html#method-i-next_day","(p1 = v1)","<p>This method is equivalent to d + n.\n"],["next_month","Date","Date.html#method-i-next_month","(p1 = v1)","<p>This method is equivalent to d &gt;&gt; n\n"],["next_year","Date","Date.html#method-i-next_year","(p1 = v1)","<p>This method is equivalent to d &gt;&gt; (n * 12)\n"],["now","DateTime","DateTime.html#method-c-now","(p1 = v1)","<p>Creates a date-time object denoting the present time.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">DateTime</span>.<span class=\"ruby-identifier\">now</span>              <span class=\"ruby-comment\">#=&gt; #&lt;DateTime: 2011-06-11T21:20:44+09:00 ...</span>\n</pre>\n"],["ordinal","Date","Date.html#method-c-ordinal","(p1 = v1, p2 = v2, p3 = v3)","<p>Creates a date object denoting the given ordinal date.\n<p>The day of year should be a negative or a positive …\n"],["ordinal","DateTime","DateTime.html#method-c-ordinal","(p1 = v1, p2 = v2, p3 = v3, p4 = v4, p5 = v5, p6 = v6, p7 = v7)","<p>Creates a date-time object denoting the given ordinal date.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">DateTime</span>.<span class=\"ruby-identifier\">ordinal</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">34</span>) <span class=\"ruby-comment\">#=&gt; #&lt;DateTime: ...</span>\n</pre>\n"],["parse","Date","Date.html#method-c-parse","(p1 = v1, p2 = v2, p3 = v3)","<p>Parses the given representation of date and time, and creates a date\nobject.  This method does not function …\n"],["parse","DateTime","DateTime.html#method-c-parse","(p1 = v1, p2 = v2, p3 = v3)","<p>Parses the given representation of date and time, and creates a date\nobject.  This method does not function …\n"],["prev_day","Date","Date.html#method-i-prev_day","(p1 = v1)","<p>This method is equivalent to d - n.\n"],["prev_month","Date","Date.html#method-i-prev_month","(p1 = v1)","<p>This method is equivalent to d &lt;&lt; n\n"],["prev_year","Date","Date.html#method-i-prev_year","(p1 = v1)","<p>This method is equivalent to d &lt;&lt; (n * 12)\n"],["rfc2822","Date","Date.html#method-i-rfc2822","()","<p>This method is equivalent to strftime(‘%a, %-d %b %Y %T %z’).\n"],["rfc2822","Date","Date.html#method-c-rfc2822","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical RFC 2822 formats.\n\n<pre>Date.rfc2822('Sat, ...</pre>\n"],["rfc2822","DateTime","DateTime.html#method-c-rfc2822","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical RFC 2822 formats.\n\n<pre>DateTime.rfc2822('Sat, ...</pre>\n"],["rfc3339","Date","Date.html#method-i-rfc3339","()","<p>This method is equivalent to strftime(‘%FT%T%:z’).\n"],["rfc3339","Date","Date.html#method-c-rfc3339","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical RFC 3339 formats.\n\n<pre>Date.rfc3339('2001-02-03T04:05:06+07:00') ...</pre>\n"],["rfc3339","DateTime","DateTime.html#method-c-rfc3339","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical RFC 3339 formats.\n\n<pre>DateTime.rfc3339('2001-02-03T04:05:06+07:00') ...</pre>\n"],["rfc3339","DateTime","DateTime.html#method-i-rfc3339","(*args)","<p>This method is equivalent to strftime(‘%FT%T’).  The optional argument n is\nlength of fractional seconds. …\n"],["rfc822","Date","Date.html#method-i-rfc822","()","<p>This method is equivalent to strftime(‘%a, %-d %b %Y %T %z’).\n"],["rfc822","Date","Date.html#method-c-rfc822","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical RFC 2822 formats.\n\n<pre>Date.rfc2822('Sat, ...</pre>\n"],["rfc822","DateTime","DateTime.html#method-c-rfc822","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical RFC 2822 formats.\n\n<pre>DateTime.rfc2822('Sat, ...</pre>\n"],["saturday?","Date","Date.html#method-i-saturday-3F","()","<p>Returns true if the date is Saturday.\n"],["start","Date","Date.html#method-i-start","()","<p>Returns the Julian day number denoting the day of calendar reform.\n\n<pre>Date.new(2001,2,3).start           ...</pre>\n"],["step","Date","Date.html#method-i-step","(p1, p2 = v2)","<p>Iterates evaluation of the given block, which takes a date object. The\nlimit should be a date object. …\n"],["strftime","Date","Date.html#method-i-strftime","(*args)","\n<pre>Formats date according to the directives in the given format\nstring.\nThe directives begins with a percent ...</pre>\n"],["strftime","DateTime","DateTime.html#method-i-strftime","(*args)","\n<pre>Formats date according to the directives in the given format\nstring.\nThe directives begins with a percent ...</pre>\n"],["strptime","Date","Date.html#method-c-strptime","(p1 = v1, p2 = v2, p3 = v3)","<p>Parses the given representation of date and time with the given template,\nand creates a date object. …\n"],["strptime","DateTime","DateTime.html#method-c-strptime","(p1 = v1, p2 = v2, p3 = v3)","<p>Parses the given representation of date and time with the given template,\nand creates a date object. …\n"],["succ","Date","Date.html#method-i-succ","()","<p>Returns a date object denoting the following day.\n"],["sunday?","Date","Date.html#method-i-sunday-3F","()","<p>Returns true if the date is Sunday.\n"],["thursday?","Date","Date.html#method-i-thursday-3F","()","<p>Returns true if the date is Thursday.\n"],["to_date","Date","Date.html#method-i-to_date","()","<p>Returns self;\n"],["to_date","DateTime","DateTime.html#method-i-to_date","()","<p>Returns a Date object which denotes self.\n"],["to_date","Time","Time.html#method-i-to_date","()","<p>Returns a Date object which denotes self.\n"],["to_datetime","Date","Date.html#method-i-to_datetime","()","<p>Returns a DateTime object which denotes self.\n"],["to_datetime","DateTime","DateTime.html#method-i-to_datetime","()","<p>Returns self.\n"],["to_datetime","Time","Time.html#method-i-to_datetime","()","<p>Returns a DateTime object which denotes self.\n"],["to_s","Date","Date.html#method-i-to_s","()","<p>Returns a string in an ISO 8601 format (This method doesn’t use the\nexpanded representations).\n\n<pre>Date.new(2001,2,3).to_s ...</pre>\n"],["to_s","DateTime","DateTime.html#method-i-to_s","()","<p>Returns a string in an ISO 8601 format (This method doesn’t use the\nexpanded representations).\n\n<pre>DateTime.new(2001,2,3,4,5,6,'-7').to_s ...</pre>\n"],["to_time","Date","Date.html#method-i-to_time","()","<p>Returns a Time object which denotes self.\n"],["to_time","DateTime","DateTime.html#method-i-to_time","()","<p>Returns a Time object which denotes self.\n"],["to_time","Time","Time.html#method-i-to_time","()","<p>Returns a copy of self as local mode.\n"],["today","Date","Date.html#method-c-today","(p1 = v1)","<p>Creates a date object denoting the present day.\n"],["tuesday?","Date","Date.html#method-i-tuesday-3F","()","<p>Returns true if the date is Tuesday.\n"],["upto","Date","Date.html#method-i-upto","(p1)","<p>This method is equivalent to step(max, 1){|date| …}.\n"],["valid_civil?","Date","Date.html#method-c-valid_civil-3F","(p1, p2, p3, p4 = v4)","<p>Returns true if the given calendar date is valid, and false if not.\n\n<pre>Date.valid_date?(2001,2,3)        ...</pre>\n"],["valid_commercial?","Date","Date.html#method-c-valid_commercial-3F","(p1, p2, p3, p4 = v4)","<p>Returns true if the given week date is valid, and false if not.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">valid_commercial?</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">5</span>,<span class=\"ruby-value\">6</span>)  <span class=\"ruby-comment\">#=&gt; ...</span>\n</pre>\n"],["valid_date?","Date","Date.html#method-c-valid_date-3F","(p1, p2, p3, p4 = v4)","<p>Returns true if the given calendar date is valid, and false if not.\n\n<pre>Date.valid_date?(2001,2,3)        ...</pre>\n"],["valid_jd?","Date","Date.html#method-c-valid_jd-3F","(p1, p2 = v2)","<p>Just returns true.  It’s nonsense, but is for symmetry.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">valid_jd?</span>(<span class=\"ruby-value\">2451944</span>)           <span class=\"ruby-comment\">#=&gt; true</span>\n</pre>\n<p>See …\n"],["valid_ordinal?","Date","Date.html#method-c-valid_ordinal-3F","(p1, p2, p3 = v3)","<p>Returns true if the given ordinal date is valid, and false if not.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">valid_ordinal?</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">34</span>)      <span class=\"ruby-comment\">#=&gt; ...</span>\n</pre>\n"],["wday","Date","Date.html#method-i-wday","()","<p>Returns the day of week (0-6, Sunday is zero).\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>).<span class=\"ruby-identifier\">wday</span>           <span class=\"ruby-comment\">#=&gt; 6</span>\n</pre>\n"],["wednesday?","Date","Date.html#method-i-wednesday-3F","()","<p>Returns true if the date is Wednesday.\n"],["xmlschema","Date","Date.html#method-c-xmlschema","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical XML Schema formats.\n\n<pre>Date.xmlschema('2001-02-03') ...</pre>\n"],["xmlschema","Date","Date.html#method-i-xmlschema","()","<p>This method is equivalent to strftime(‘%F’).\n"],["xmlschema","DateTime","DateTime.html#method-i-xmlschema","(p1 = v1)","<p>This method is equivalent to strftime(‘%FT%T’).  The optional argument n is\nlength of fractional seconds. …\n"],["xmlschema","DateTime","DateTime.html#method-c-xmlschema","(p1 = v1, p2 = v2)","<p>Creates a new Date object by parsing from a string according to some\ntypical XML Schema formats.\n\n<pre>DateTime.xmlschema('2001-02-03T04:05:06+07:00') ...</pre>\n"],["yday","Date","Date.html#method-i-yday","()","<p>Returns the day of the year (1-366).\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>).<span class=\"ruby-identifier\">yday</span>           <span class=\"ruby-comment\">#=&gt; 34</span>\n</pre>\n"],["year","Date","Date.html#method-i-year","()","<p>Returns the year.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">2001</span>,<span class=\"ruby-value\">2</span>,<span class=\"ruby-value\">3</span>).<span class=\"ruby-identifier\">year</span>           <span class=\"ruby-comment\">#=&gt; 2001</span>\n(<span class=\"ruby-constant\">Date</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-value\">1</span>,<span class=\"ruby-value\">1</span>,<span class=\"ruby-value\">1</span>) <span class=\"ruby-operator\">-</span> <span class=\"ruby-value\">1</span>).<span class=\"ruby-identifier\">year</span>        <span class=\"ruby-comment\">#=&gt; 0</span>\n</pre>\n"]]}}