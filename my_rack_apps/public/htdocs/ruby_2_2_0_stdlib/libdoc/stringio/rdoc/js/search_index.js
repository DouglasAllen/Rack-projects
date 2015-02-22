var search_data = {"index":{"searchIndex":["io","generic_readable","generic_writable","stringio","<<()","binmode()","bytes()","chars()","close()","close_read()","close_write()","closed?()","closed_read?()","closed_write?()","codepoints()","each()","each_byte()","each_char()","each_codepoint()","each_line()","eof()","eof?()","external_encoding()","fcntl()","fileno()","flush()","fsync()","getbyte()","getc()","gets()","internal_encoding()","isatty()","length()","lineno()","lineno=()","lines()","new()","open()","pid()","pos()","pos=()","print()","printf()","putc()","puts()","read()","read_nonblock()","readbyte()","readchar()","readline()","readlines()","readpartial()","reopen()","rewind()","seek()","set_encoding()","size()","string()","string=()","sync()","sync=()","sysread()","tell()","truncate()","tty?()","ungetbyte()","ungetc()","write()","write_nonblock()"],"longSearchIndex":["io","io::generic_readable","io::generic_writable","stringio","io::generic_writable#<<()","stringio#binmode()","stringio#bytes()","stringio#chars()","stringio#close()","stringio#close_read()","stringio#close_write()","stringio#closed?()","stringio#closed_read?()","stringio#closed_write?()","stringio#codepoints()","stringio#each()","stringio#each_byte()","stringio#each_char()","stringio#each_codepoint()","stringio#each_line()","stringio#eof()","stringio#eof?()","stringio#external_encoding()","stringio#fcntl()","stringio#fileno()","stringio#flush()","stringio#fsync()","stringio#getbyte()","stringio#getc()","stringio#gets()","stringio#internal_encoding()","stringio#isatty()","stringio#length()","stringio#lineno()","stringio#lineno=()","stringio#lines()","stringio::new()","stringio::open()","stringio#pid()","stringio#pos()","stringio#pos=()","io::generic_writable#print()","io::generic_writable#printf()","stringio#putc()","io::generic_writable#puts()","stringio#read()","io::generic_readable#read_nonblock()","io::generic_readable#readbyte()","io::generic_readable#readchar()","io::generic_readable#readline()","stringio#readlines()","io::generic_readable#readpartial()","stringio#reopen()","stringio#rewind()","stringio#seek()","stringio#set_encoding()","stringio#size()","stringio#string()","stringio#string=()","stringio#sync()","stringio#sync=()","io::generic_readable#sysread()","stringio#tell()","stringio#truncate()","stringio#tty?()","stringio#ungetbyte()","stringio#ungetc()","stringio#write()","io::generic_writable#write_nonblock()"],"info":[["IO","","IO.html","",""],["IO::generic_readable","","IO/generic_readable.html","",""],["IO::generic_writable","","IO/generic_writable.html","",""],["StringIO","","StringIO.html","","<p>Pseudo I/O on String object.\n<p>Commonly used to simulate `$stdio` or `$stderr`\n<p>Examples\n"],["<<","IO::generic_writable","IO/generic_writable.html#method-i-3C-3C","(p1)","<p>See IO#<<.\n"],["binmode","StringIO","StringIO.html#method-i-binmode","()","<p>Returns <strong>strio</strong> itself.  Just for compatibility to IO.\n"],["bytes","StringIO","StringIO.html#method-i-bytes","()","<p>This is a deprecated alias for #each_byte.\n"],["chars","StringIO","StringIO.html#method-i-chars","()","<p>This is a deprecated alias for <code>each_char</code>.\n"],["close","StringIO","StringIO.html#method-i-close","()","<p>Closes strio.  The <strong>strio</strong> is unavailable for any further\ndata operations; an <code>IOError</code> is raised if such …\n"],["close_read","StringIO","StringIO.html#method-i-close_read","()","<p>Closes the read end of a StringIO.  Will raise an <code>IOError</code> if\nthe <strong>strio</strong> is not readable.\n"],["close_write","StringIO","StringIO.html#method-i-close_write","()","<p>Closes the write end of a StringIO.  Will raise an  <code>IOError</code> if\nthe <strong>strio</strong> is not writeable.\n"],["closed?","StringIO","StringIO.html#method-i-closed-3F","()","<p>Returns <code>true</code> if <strong>strio</strong> is completely closed,\n<code>false</code> otherwise.\n"],["closed_read?","StringIO","StringIO.html#method-i-closed_read-3F","()","<p>Returns <code>true</code> if <strong>strio</strong> is not readable,\n<code>false</code> otherwise.\n"],["closed_write?","StringIO","StringIO.html#method-i-closed_write-3F","()","<p>Returns <code>true</code> if <strong>strio</strong> is not writable,\n<code>false</code> otherwise.\n"],["codepoints","StringIO","StringIO.html#method-i-codepoints","()","<p>This is a deprecated alias for <code>each_codepoint</code>.\n"],["each","StringIO","StringIO.html#method-i-each","(*args)","<p>See IO#each.\n"],["each_byte","StringIO","StringIO.html#method-i-each_byte","()","<p>See IO#each_byte.\n"],["each_char","StringIO","StringIO.html#method-i-each_char","()","<p>See IO#each_char.\n"],["each_codepoint","StringIO","StringIO.html#method-i-each_codepoint","()","<p>See IO#each_codepoint.\n"],["each_line","StringIO","StringIO.html#method-i-each_line","(*args)","<p>See IO#each.\n"],["eof","StringIO","StringIO.html#method-i-eof","()","<p>Returns true if <strong>strio</strong> is at end of file. The stringio must\nbe opened for reading or an <code>IOError</code> will be …\n"],["eof?","StringIO","StringIO.html#method-i-eof-3F","()","<p>Returns true if <strong>strio</strong> is at end of file. The stringio must\nbe opened for reading or an <code>IOError</code> will be …\n"],["external_encoding","StringIO","StringIO.html#method-i-external_encoding","()","<p>Returns the Encoding object that represents the encoding of the file. If\nstrio is write mode and no encoding …\n"],["fcntl","StringIO","StringIO.html#method-i-fcntl","(*args)","<p>Raises NotImplementedError.\n"],["fileno","StringIO","StringIO.html#method-i-fileno","()","<p>Returns <code>nil</code>.  Just for compatibility to IO.\n"],["flush","StringIO","StringIO.html#method-i-flush","()","<p>Returns <strong>strio</strong> itself.  Just for compatibility to IO.\n"],["fsync","StringIO","StringIO.html#method-i-fsync","()","<p>Returns 0.  Just for compatibility to IO.\n"],["getbyte","StringIO","StringIO.html#method-i-getbyte","()","<p>See IO#getbyte.\n"],["getc","StringIO","StringIO.html#method-i-getc","()","<p>See IO#getc.\n"],["gets","StringIO","StringIO.html#method-i-gets","(*args)","<p>See IO#gets.\n"],["internal_encoding","StringIO","StringIO.html#method-i-internal_encoding","()","<p>Returns the Encoding of the internal string if conversion is specified. \nOtherwise returns nil.\n"],["isatty","StringIO","StringIO.html#method-i-isatty","()","<p>Returns <code>false</code>.  Just for compatibility to IO.\n"],["length","StringIO","StringIO.html#method-i-length","()","<p>Returns the size of the buffer string.\n"],["lineno","StringIO","StringIO.html#method-i-lineno","()","<p>Returns the current line number in <strong>strio</strong>. The stringio\nmust be opened for reading. <code>lineno</code> counts the …\n"],["lineno=","StringIO","StringIO.html#method-i-lineno-3D","(p1)","<p>Manually sets the current line number to the given value. <code>$.</code>\nis updated only on the next read.\n"],["lines","StringIO","StringIO.html#method-i-lines","(*args)","<p>This is a deprecated alias for <code>each_line</code>.\n"],["new","StringIO","StringIO.html#method-c-new","(*args)","<p>Creates new StringIO instance from with <em>string</em> and <em>mode</em>.\n"],["open","StringIO","StringIO.html#method-c-open","(*args)","<p>Equivalent to StringIO.new except that when it is called with a block, it\nyields with the new instance …\n"],["pid","StringIO","StringIO.html#method-i-pid","()","<p>Returns <code>nil</code>.  Just for compatibility to IO.\n"],["pos","StringIO","StringIO.html#method-i-pos","()","<p>Returns the current offset (in bytes) of <strong>strio</strong>.\n"],["pos=","StringIO","StringIO.html#method-i-pos-3D","(p1)","<p>Seeks to the given position (in bytes) in <strong>strio</strong>.\n"],["print","IO::generic_writable","IO/generic_writable.html#method-i-print","(*args)","<p>See IO#print.\n"],["printf","IO::generic_writable","IO/generic_writable.html#method-i-printf","(*args)","<p>See IO#printf.\n"],["putc","StringIO","StringIO.html#method-i-putc","(p1)","<p>See IO#putc.\n"],["puts","IO::generic_writable","IO/generic_writable.html#method-i-puts","(*args)","<p>See IO#puts.\n"],["read","StringIO","StringIO.html#method-i-read","(*args)","<p>See IO#read.\n"],["read_nonblock","IO::generic_readable","IO/generic_readable.html#method-i-read_nonblock","(p1, p2 = v2, p3 = {})","<p>Similar to #read, but raises <code>EOFError</code> at end of string unless\nthe +exception: false+ option is passed …\n"],["readbyte","IO::generic_readable","IO/generic_readable.html#method-i-readbyte","()","<p>See IO#readbyte.\n"],["readchar","IO::generic_readable","IO/generic_readable.html#method-i-readchar","()","<p>See IO#readchar.\n"],["readline","IO::generic_readable","IO/generic_readable.html#method-i-readline","(*args)","<p>See IO#readline.\n"],["readlines","StringIO","StringIO.html#method-i-readlines","(*args)","<p>See IO#readlines.\n"],["readpartial","IO::generic_readable","IO/generic_readable.html#method-i-readpartial","(*args)","<p>Similar to #read, but raises <code>EOFError</code> at end of string instead\nof returning <code>nil</code>, as well as IO#sysread …\n"],["reopen","StringIO","StringIO.html#method-i-reopen","(*args)","<p>Reinitializes <strong>strio</strong> with the given <em>other_StrIO</em> or\n<em>string</em> and <em>mode</em> (see StringIO#new).\n"],["rewind","StringIO","StringIO.html#method-i-rewind","()","<p>Positions <strong>strio</strong> to the beginning of input, resetting\n<code>lineno</code> to zero.\n"],["seek","StringIO","StringIO.html#method-i-seek","(p1, p2 = v2)","<p>Seeks to a given offset <em>amount</em> in the stream according to the\nvalue of <em>whence</em> (see IO#seek).\n"],["set_encoding","StringIO","StringIO.html#method-i-set_encoding","(p1, p2 = v2, p3 = {})","<p>Specify the encoding of the StringIO as <em>ext_enc</em>. Use the default\nexternal encoding if <em>ext_enc</em> is nil. …\n"],["size","StringIO","StringIO.html#method-i-size","()","<p>Returns the size of the buffer string.\n"],["string","StringIO","StringIO.html#method-i-string","()","<p>Returns underlying String object, the subject of IO.\n"],["string=","StringIO","StringIO.html#method-i-string-3D","(p1)","<p>Changes underlying String object, the subject of IO.\n"],["sync","StringIO","StringIO.html#method-i-sync","()","<p>Returns <code>true</code> always.\n"],["sync=","StringIO","StringIO.html#method-i-sync-3D","(p1)","<p>Returns the argument unchanged.  Just for compatibility to IO.\n"],["sysread","IO::generic_readable","IO/generic_readable.html#method-i-sysread","(*args)","<p>Similar to #read, but raises <code>EOFError</code> at end of string instead\nof returning <code>nil</code>, as well as IO#sysread …\n"],["tell","StringIO","StringIO.html#method-i-tell","()","<p>Returns the current offset (in bytes) of <strong>strio</strong>.\n"],["truncate","StringIO","StringIO.html#method-i-truncate","(p1)","<p>Truncates the buffer string to at most <em>integer</em> bytes. The\n<strong>strio</strong> must be opened for writing.\n"],["tty?","StringIO","StringIO.html#method-i-tty-3F","()","<p>Returns <code>false</code>.  Just for compatibility to IO.\n"],["ungetbyte","StringIO","StringIO.html#method-i-ungetbyte","(p1)","<p>See IO#ungetbyte\n"],["ungetc","StringIO","StringIO.html#method-i-ungetc","(p1)","<p>Pushes back one character (passed as a parameter) onto\n<strong>strio</strong> such that a subsequent buffered read will …\n"],["write","StringIO","StringIO.html#method-i-write","(p1)","<p>Appends the given string to the underlying buffer string of\n<strong>strio</strong>. The stream must be opened for writing. …\n"],["write_nonblock","IO::generic_writable","IO/generic_writable.html#method-i-write_nonblock","(p1, p2 = {})",""]]}}