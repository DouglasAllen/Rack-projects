var search_data = {"index":{"searchIndex":["csv","malformedcsverror","row","table","object","<<()","<<()","<<()","==()","==()","csv()","[]()","[]()","[]=()","[]=()","add_row()","by_col()","by_col!()","by_col_or_row()","by_col_or_row!()","by_row()","by_row!()","convert()","converters()","delete()","delete()","delete_if()","delete_if()","each()","each()","each()","fetch()","field()","field?()","field_row?()","fields()","filter()","force_quotes?()","foreach()","generate()","generate_line()","gets()","has_key?()","header?()","header_convert()","header_converters()","header_row?()","header_row?()","headers()","headers()","headers()","include?()","index()","inspect()","inspect()","inspect()","instance()","key?()","member?()","new()","new()","new()","open()","parse()","parse_line()","push()","push()","puts()","read()","read()","readline()","readlines()","readlines()","return_headers?()","rewind()","shift()","skip_blanks?()","table()","to_a()","to_csv()","to_csv()","to_hash()","to_s()","to_s()","unconverted_fields?()","values_at()","values_at()","write_headers?()"],"longSearchIndex":["csv","csv::malformedcsverror","csv::row","csv::table","object","csv#<<()","csv::row#<<()","csv::table#<<()","csv::row#==()","csv::table#==()","object#csv()","csv::row#[]()","csv::table#[]()","csv::row#[]=()","csv::table#[]=()","csv#add_row()","csv::table#by_col()","csv::table#by_col!()","csv::table#by_col_or_row()","csv::table#by_col_or_row!()","csv::table#by_row()","csv::table#by_row!()","csv#convert()","csv#converters()","csv::row#delete()","csv::table#delete()","csv::row#delete_if()","csv::table#delete_if()","csv#each()","csv::row#each()","csv::table#each()","csv::row#fetch()","csv::row#field()","csv::row#field?()","csv::row#field_row?()","csv::row#fields()","csv::filter()","csv#force_quotes?()","csv::foreach()","csv::generate()","csv::generate_line()","csv#gets()","csv::row#has_key?()","csv::row#header?()","csv#header_convert()","csv#header_converters()","csv#header_row?()","csv::row#header_row?()","csv#headers()","csv::row#headers()","csv::table#headers()","csv::row#include?()","csv::row#index()","csv#inspect()","csv::row#inspect()","csv::table#inspect()","csv::instance()","csv::row#key?()","csv::row#member?()","csv::new()","csv::row::new()","csv::table::new()","csv::open()","csv::parse()","csv::parse_line()","csv::row#push()","csv::table#push()","csv#puts()","csv#read()","csv::read()","csv#readline()","csv#readlines()","csv::readlines()","csv#return_headers?()","csv#rewind()","csv#shift()","csv#skip_blanks?()","csv::table()","csv::table#to_a()","csv::row#to_csv()","csv::table#to_csv()","csv::row#to_hash()","csv::row#to_s()","csv::table#to_s()","csv#unconverted_fields?()","csv::row#values_at()","csv::table#values_at()","csv#write_headers?()"],"info":[["CSV","","CSV.html","","<p>This class provides a complete interface to CSV files and data.  It offers\ntools to enable you to read …\n"],["CSV::MalformedCSVError","","CSV/MalformedCSVError.html","","<p>The error thrown when the parser encounters illegal CSV formatting.\n"],["CSV::Row","","CSV/Row.html","","<p>A CSV::Row is part Array and part Hash.  It retains an order for the fields\nand allows duplicates just …\n"],["CSV::Table","","CSV/Table.html","","<p>A CSV::Table is a two-dimensional data structure for representing CSV\ndocuments.  Tables allow you to …\n"],["Object","","Object.html","",""],["<<","CSV","CSV.html#method-i-3C-3C","(row)","<p>The primary write method for wrapped Strings and IOs, <code>row</code> (an\nArray or CSV::Row) is converted to CSV …\n"],["<<","CSV::Row","CSV/Row.html#method-i-3C-3C","(arg)","<p>If a two-element Array is provided, it is assumed to be a header and field\nand the pair is appended. …\n"],["<<","CSV::Table","CSV/Table.html#method-i-3C-3C","(row_or_array)","<p>Adds a new row to the bottom end of this table.  You can provide an Array,\nwhich will be converted to …\n"],["==","CSV::Row","CSV/Row.html#method-i-3D-3D","(other)","<p>Returns <code>true</code> if this row contains the same headers and fields\nin the same order as <code>other</code>.\n"],["==","CSV::Table","CSV/Table.html#method-i-3D-3D","(other)","<p>Returns <code>true</code> if all rows of this table ==()\n<code>other</code>‘s rows.\n"],["CSV","Object","Object.html#method-i-CSV","(*args, &block)","<p>Passes <code>args</code> to CSV::instance.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">CSV</span>(<span class=\"ruby-string\">&quot;CSV,data&quot;</span>).<span class=\"ruby-identifier\">read</span>\n  <span class=\"ruby-comment\">#=&gt; [[&quot;CSV&quot;, &quot;data&quot;]]</span>\n</pre>\n<p>If a block is given, the instance …\n"],["[]","CSV::Row","CSV/Row.html#method-i-5B-5D","(header_or_index, minimum_index = 0)",""],["[]","CSV::Table","CSV/Table.html#method-i-5B-5D","(index_or_header)","<p>In the default mixed mode, this method returns rows for index access and\ncolumns for header access.  …\n"],["[]=","CSV::Row","CSV/Row.html#method-i-5B-5D-3D","(*args)","<p>Looks up the field by the semantics described in CSV::Row.field() and\nassigns the <code>value</code>.\n<p>Assigning past …\n"],["[]=","CSV::Table","CSV/Table.html#method-i-5B-5D-3D","(index_or_header, value)","<p>In the default mixed mode, this method assigns rows for index access and\ncolumns for header access.  …\n"],["add_row","CSV","CSV.html#method-i-add_row","(row)",""],["by_col","CSV::Table","CSV/Table.html#method-i-by_col","()","<p>Returns a duplicate table object, in column mode.  This is handy for\nchaining in a single call without …\n"],["by_col!","CSV::Table","CSV/Table.html#method-i-by_col-21","()","<p>Switches the mode of this table to column mode.  All calls to indexing and\niteration methods will work …\n"],["by_col_or_row","CSV::Table","CSV/Table.html#method-i-by_col_or_row","()","<p>Returns a duplicate table object, in mixed mode.  This is handy for\nchaining in a single call without …\n"],["by_col_or_row!","CSV::Table","CSV/Table.html#method-i-by_col_or_row-21","()","<p>Switches the mode of this table to mixed mode.  All calls to indexing and\niteration methods will use …\n"],["by_row","CSV::Table","CSV/Table.html#method-i-by_row","()","<p>Returns a duplicate table object, in row mode.  This is handy for chaining\nin a single call without changing …\n"],["by_row!","CSV::Table","CSV/Table.html#method-i-by_row-21","()","<p>Switches the mode of this table to row mode.  All calls to indexing and\niteration methods will work with …\n"],["convert","CSV","CSV.html#method-i-convert","(name = nil, &converter)","<p>You can use this method to install a CSV::Converters built-in, or provide a\nblock that handles a custom …\n"],["converters","CSV","CSV.html#method-i-converters","()","<p>Returns the current list of converters in effect.  See CSV::new for\ndetails. Built-in converters will …\n"],["delete","CSV::Row","CSV/Row.html#method-i-delete","(header_or_index, minimum_index = 0)","<p>Used to remove a pair from the row by <code>header</code> or\n<code>index</code>.  The pair is located as described in CSV::Row.field() …\n"],["delete","CSV::Table","CSV/Table.html#method-i-delete","(index_or_header)","<p>Removes and returns the indicated column or row.  In the default mixed mode\nindices refer to rows and …\n"],["delete_if","CSV::Row","CSV/Row.html#method-i-delete_if","(&block)","<p>The provided <code>block</code> is passed a header and field for each pair\nin the row and expected to return <code>true</code> …\n"],["delete_if","CSV::Table","CSV/Table.html#method-i-delete_if","(&block)","<p>Removes any column or row for which the block returns <code>true</code>. \nIn the default mixed mode or row mode, iteration …\n"],["each","CSV","CSV.html#method-i-each","()","<p>Yields each row of the data source in turn.\n<p>Support for Enumerable.\n<p>The data source must be open for reading. …\n"],["each","CSV::Row","CSV/Row.html#method-i-each","(&block)","<p>Yields each pair of the row as header and field tuples (much like iterating\nover a Hash).\n<p>Support for …\n"],["each","CSV::Table","CSV/Table.html#method-i-each","(&block)","<p>In the default mixed mode or row mode, iteration is the standard row major\nwalking of rows.  In column …\n"],["fetch","CSV::Row","CSV/Row.html#method-i-fetch","(header, *varargs)","<p>This method will fetch the field value by <code>header</code>. It has the\nsame behavior as Hash#fetch: if there is …\n"],["field","CSV::Row","CSV/Row.html#method-i-field","(header_or_index, minimum_index = 0)","<p>This method will return the field value by <code>header</code> or\n<code>index</code>.  If a field is not found, <code>nil</code> is returned.\n…\n"],["field?","CSV::Row","CSV/Row.html#method-i-field-3F","(data)","<p>Returns <code>true</code> if <code>data</code> matches a field in this row,\nand <code>false</code> otherwise.\n"],["field_row?","CSV::Row","CSV/Row.html#method-i-field_row-3F","()","<p>Returns <code>true</code> if this is a field row.\n"],["fields","CSV::Row","CSV/Row.html#method-i-fields","(*headers_and_or_indices)","<p>This method accepts any number of arguments which can be headers, indices,\nRanges of either, or two-element …\n"],["filter","CSV","CSV.html#method-c-filter","(*args)","<p>This method is a convenience for building Unix-like filters for CSV data.\nEach row is yielded to the …\n"],["force_quotes?","CSV","CSV.html#method-i-force_quotes-3F","()","<p>Returns <code>true</code> if all output fields are quoted. See CSV::new for\ndetails.\n"],["foreach","CSV","CSV.html#method-c-foreach","(path, options = Hash.new, &block)","<p>This method is intended as the primary interface for reading CSV files. \nYou pass a <code>path</code> and any <code>options</code> …\n"],["generate","CSV","CSV.html#method-c-generate","(*args)","<p>This method wraps a String you provide, or an empty default String, in a\nCSV object which is passed to …\n"],["generate_line","CSV","CSV.html#method-c-generate_line","(row, options = Hash.new)","<p>This method is a shortcut for converting a single row (Array) into a CSV\nString.\n<p>The <code>options</code> parameter …\n"],["gets","CSV","CSV.html#method-i-gets","()",""],["has_key?","CSV::Row","CSV/Row.html#method-i-has_key-3F","(header)","<p>Returns <code>true</code> if there is a field with the given\n<code>header</code>.\n"],["header?","CSV::Row","CSV/Row.html#method-i-header-3F","(name)","<p>Returns <code>true</code> if <code>name</code> is a header for this row,\nand <code>false</code> otherwise.\n"],["header_convert","CSV","CSV.html#method-i-header_convert","(name = nil, &converter)","<p>Identical to CSV#convert(), but for header rows.\n<p>Note that this method must be called before header rows …\n"],["header_converters","CSV","CSV.html#method-i-header_converters","()","<p>Returns the current list of converters in effect for headers.  See CSV::new\nfor details.  Built-in converters …\n"],["header_row?","CSV","CSV.html#method-i-header_row-3F","()","<p>Returns <code>true</code> if the next row read will be a header row.\n"],["header_row?","CSV::Row","CSV/Row.html#method-i-header_row-3F","()","<p>Returns <code>true</code> if this is a header row.\n"],["headers","CSV","CSV.html#method-i-headers","()","<p>Returns <code>nil</code> if headers will not be used, <code>true</code> if\nthey will but have not yet been read, or the actual …\n"],["headers","CSV::Row","CSV/Row.html#method-i-headers","()","<p>Returns the headers of this row.\n"],["headers","CSV::Table","CSV/Table.html#method-i-headers","()","<p>Returns the headers for the first row of this table (assumed to match all\nother rows).  An empty Array …\n"],["include?","CSV::Row","CSV/Row.html#method-i-include-3F","(header)",""],["index","CSV::Row","CSV/Row.html#method-i-index","(header, minimum_index = 0)","<p>This method will return the index of a field with the provided\n<code>header</code>. The <code>offset</code> can be used to locate …\n"],["inspect","CSV","CSV.html#method-i-inspect","()","<p>Returns a simplified description of the key CSV attributes in an ASCII\ncompatible String.\n"],["inspect","CSV::Row","CSV/Row.html#method-i-inspect","()","<p>A summary of fields, by header, in an ASCII compatible String.\n"],["inspect","CSV::Table","CSV/Table.html#method-i-inspect","()","<p>Shows the mode and size of this table in a US-ASCII String.\n"],["instance","CSV","CSV.html#method-c-instance","(data = $stdout, options = Hash.new)","<p>This method will return a CSV instance, just like CSV::new(), but the\ninstance will be cached and returned …\n"],["key?","CSV::Row","CSV/Row.html#method-i-key-3F","(header)",""],["member?","CSV::Row","CSV/Row.html#method-i-member-3F","(header)",""],["new","CSV","CSV.html#method-c-new","(data, options = Hash.new)","<p>This constructor will wrap either a String or IO object passed in\n<code>data</code> for reading and/or writing.   …\n"],["new","CSV::Row","CSV/Row.html#method-c-new","(headers, fields, header_row = false)","<p>Construct a new CSV::Row from <code>headers</code> and <code>fields</code>,\nwhich are expected to be Arrays.  If one Array is shorter …\n"],["new","CSV::Table","CSV/Table.html#method-c-new","(array_of_rows)","<p>Construct a new CSV::Table from <code>array_of_rows</code>, which are\nexpected to be CSV::Row objects.  All rows are …\n"],["open","CSV","CSV.html#method-c-open","(*args)","<p>This method opens an IO object, and wraps that with CSV.  This is intended\nas the primary interface for …\n"],["parse","CSV","CSV.html#method-c-parse","(*args, &block)","<p>This method can be used to easily parse CSV out of a String.  You may\neither provide a <code>block</code> which will …\n"],["parse_line","CSV","CSV.html#method-c-parse_line","(line, options = Hash.new)","<p>This method is a shortcut for converting a single line of a CSV String into\nan Array.  Note that if  …\n"],["push","CSV::Row","CSV/Row.html#method-i-push","(*args)","<p>A shortcut for appending multiple fields.  Equivalent to:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">args</span>.<span class=\"ruby-identifier\">each</span> { <span class=\"ruby-operator\">|</span><span class=\"ruby-identifier\">arg</span><span class=\"ruby-operator\">|</span> <span class=\"ruby-identifier\">csv_row</span> <span class=\"ruby-operator\">&lt;&lt;</span> <span class=\"ruby-identifier\">arg</span> }\n</pre>\n<p>This method …\n"],["push","CSV::Table","CSV/Table.html#method-i-push","(*rows)","<p>A shortcut for appending multiple rows.  Equivalent to:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">rows</span>.<span class=\"ruby-identifier\">each</span> { <span class=\"ruby-operator\">|</span><span class=\"ruby-identifier\">row</span><span class=\"ruby-operator\">|</span> <span class=\"ruby-keyword\">self</span> <span class=\"ruby-operator\">&lt;&lt;</span> <span class=\"ruby-identifier\">row</span> }\n</pre>\n<p>This method returns …\n"],["puts","CSV","CSV.html#method-i-puts","(row)",""],["read","CSV","CSV.html#method-i-read","()","<p>Slurps the remaining rows and returns an Array of Arrays.\n<p>The data source must be open for reading.\n"],["read","CSV","CSV.html#method-c-read","(path, *options)","<p>Use to slurp a CSV file into an Array of Arrays.  Pass the\n<code>path</code> to the file and any <code>options</code> CSV::new() …\n"],["readline","CSV","CSV.html#method-i-readline","()",""],["readlines","CSV","CSV.html#method-i-readlines","()",""],["readlines","CSV","CSV.html#method-c-readlines","(*args)","<p>Alias for CSV::read().\n"],["return_headers?","CSV","CSV.html#method-i-return_headers-3F","()","<p>Returns <code>true</code> if headers will be returned as a row of results.\nSee CSV::new for details.\n"],["rewind","CSV","CSV.html#method-i-rewind","()","<p>Rewinds the underlying IO object and resets CSV’s lineno() counter.\n"],["shift","CSV","CSV.html#method-i-shift","()","<p>The primary read method for wrapped Strings and IOs, a single row is pulled\nfrom the data source, parsed …\n"],["skip_blanks?","CSV","CSV.html#method-i-skip_blanks-3F","()","<p>Returns <code>true</code> blank lines are skipped by the parser. See\nCSV::new for details.\n"],["table","CSV","CSV.html#method-c-table","(path, options = Hash.new)","<p>A shortcut for:\n\n<pre>CSV.read( path, { headers:           true,\n                  converters:        :numeric, ...</pre>\n"],["to_a","CSV::Table","CSV/Table.html#method-i-to_a","()","<p>Returns the table as an Array of Arrays.  Headers will be the first row,\nthen all of the field rows will …\n"],["to_csv","CSV::Row","CSV/Row.html#method-i-to_csv","(options = Hash.new)","<p>Returns the row as a CSV String.  Headers are not used.  Equivalent to:\n\n<pre>csv_row.fields.to_csv( options ...</pre>\n"],["to_csv","CSV::Table","CSV/Table.html#method-i-to_csv","(options = Hash.new)","<p>Returns the table as a complete CSV String.  Headers will be listed first,\nthen all of the field rows. …\n"],["to_hash","CSV::Row","CSV/Row.html#method-i-to_hash","()","<p>Collapses the row into a simple Hash.  Be warning that this discards field\norder and clobbers duplicate …\n"],["to_s","CSV::Row","CSV/Row.html#method-i-to_s","(options = Hash.new)",""],["to_s","CSV::Table","CSV/Table.html#method-i-to_s","(options = Hash.new)",""],["unconverted_fields?","CSV","CSV.html#method-i-unconverted_fields-3F","()","<p>Returns <code>true</code> if unconverted_fields() to parsed results.  See\nCSV::new for details.\n"],["values_at","CSV::Row","CSV/Row.html#method-i-values_at","(*headers_and_or_indices)",""],["values_at","CSV::Table","CSV/Table.html#method-i-values_at","(*indices_or_headers)","<p>The mixed mode default is to treat a list of indices as row access,\nreturning the rows indicated.  Anything …\n"],["write_headers?","CSV","CSV.html#method-i-write_headers-3F","()","<p>Returns <code>true</code> if headers are written in output. See CSV::new\nfor details.\n"]]}}