var search_data = {"index":{"searchIndex":["fileutils","dryrun","entry_","file","lowmethods","nowrite","streamutils_","verbose","apply_mask()","cd()","chdir()","chmod()","chmod_r()","chown()","chown_r()","cmp()","compare_file()","compare_stream()","copy()","copy_entry()","copy_file()","copy_stream()","cp()","cp_r()","getwd()","identical?()","install()","link()","ln()","ln_s()","ln_sf()","makedirs()","mkdir()","mkdir_p()","mkpath()","move()","mv()","pwd()","remove()","remove_dir()","remove_entry()","remove_entry_secure()","remove_file()","remove_tailing_slash()","rm()","rm_f()","rm_r()","rm_rf()","rmdir()","rmtree()","safe_unlink()","symlink()","touch()","uptodate?()"],"longSearchIndex":["fileutils","fileutils::dryrun","fileutils::entry_","fileutils::entry_::file","fileutils::lowmethods","fileutils::nowrite","fileutils::streamutils_","fileutils::verbose","fileutils#apply_mask()","fileutils::cd()","fileutils::chdir()","fileutils::chmod()","fileutils::chmod_r()","fileutils::chown()","fileutils::chown_r()","fileutils::cmp()","fileutils::compare_file()","fileutils::compare_stream()","fileutils::copy()","fileutils::copy_entry()","fileutils::copy_file()","fileutils::copy_stream()","fileutils::cp()","fileutils::cp_r()","fileutils::getwd()","fileutils::identical?()","fileutils::install()","fileutils::link()","fileutils::ln()","fileutils::ln_s()","fileutils::ln_sf()","fileutils::makedirs()","fileutils::mkdir()","fileutils::mkdir_p()","fileutils::mkpath()","fileutils::move()","fileutils::mv()","fileutils::pwd()","fileutils::remove()","fileutils::remove_dir()","fileutils::remove_entry()","fileutils::remove_entry_secure()","fileutils::remove_file()","fileutils#remove_tailing_slash()","fileutils::rm()","fileutils::rm_f()","fileutils::rm_r()","fileutils::rm_rf()","fileutils::rmdir()","fileutils::rmtree()","fileutils::safe_unlink()","fileutils::symlink()","fileutils::touch()","fileutils::uptodate?()"],"info":[["FileUtils","","FileUtils.html","","<p>fileutils.rb\n<p>Copyright © 2000-2007 Minero Aoki\n<p>This program is free software. You can distribute/modify …\n"],["FileUtils::DryRun","","FileUtils/DryRun.html","","<p>This module has all methods of FileUtils module, but never changes\nfiles/directories, with printing message …\n"],["FileUtils::Entry_","","FileUtils/Entry_.html","",""],["FileUtils::Entry_::File","","FileUtils/Entry_/File.html","",""],["FileUtils::LowMethods","","FileUtils/LowMethods.html","",""],["FileUtils::NoWrite","","FileUtils/NoWrite.html","","<p>This module has all methods of FileUtils module, but never changes\nfiles/directories.  This equates to …\n"],["FileUtils::StreamUtils_","","FileUtils/StreamUtils_.html","",""],["FileUtils::Verbose","","FileUtils/Verbose.html","","<p>This module has all methods of FileUtils module, but it outputs messages\nbefore acting.  This equates …\n"],["apply_mask","FileUtils","FileUtils.html#method-i-apply_mask","(mode, user_mask, op, mode_mask)",""],["cd","FileUtils","FileUtils.html#method-c-cd","(dir, options = {})","<p>Options: verbose\n<p>Changes the current directory to the directory <code>dir</code>.\n<p>If this method is called with block, …\n"],["chdir","FileUtils","FileUtils.html#method-c-chdir","(dir, options = {})",""],["chmod","FileUtils","FileUtils.html#method-c-chmod","(mode, list, options = {})","<p>Options: noop verbose\n<p>Changes permission bits on the named files (in <code>list</code>) to the\nbit pattern represented …\n"],["chmod_R","FileUtils","FileUtils.html#method-c-chmod_R","(mode, list, options = {})","<p>Options: noop verbose force\n<p>Changes permission bits on the named files (in <code>list</code>) to the\nbit pattern represented …\n"],["chown","FileUtils","FileUtils.html#method-c-chown","(user, group, list, options = {})","<p>Options: noop verbose\n<p>Changes owner and group on the named files (in <code>list</code>) to the\nuser <code>user</code> and the group …\n"],["chown_R","FileUtils","FileUtils.html#method-c-chown_R","(user, group, list, options = {})","<p>Options: noop verbose force\n<p>Changes owner and group on the named files (in <code>list</code>) to the\nuser <code>user</code> and …\n"],["cmp","FileUtils","FileUtils.html#method-c-cmp","(a, b)",""],["compare_file","FileUtils","FileUtils.html#method-c-compare_file","(a, b)","<p>Returns true if the contents of a file A and a file B are identical.\n\n<pre>FileUtils.compare_file('somefile', ...</pre>\n"],["compare_stream","FileUtils","FileUtils.html#method-c-compare_stream","(a, b)","<p>Returns true if the contents of a stream <code>a</code> and <code>b</code>\nare identical.\n"],["copy","FileUtils","FileUtils.html#method-c-copy","(src, dest, options = {})",""],["copy_entry","FileUtils","FileUtils.html#method-c-copy_entry","(src, dest, preserve = false, dereference_root = false, remove_destination = false)","<p>Copies a file system entry <code>src</code> to <code>dest</code>. If\n<code>src</code> is a directory, this method copies its contents\nrecursively. …\n"],["copy_file","FileUtils","FileUtils.html#method-c-copy_file","(src, dest, preserve = false, dereference = true)","<p>Copies file contents of <code>src</code> to <code>dest</code>. Both of\n<code>src</code> and <code>dest</code> must be a path name.\n"],["copy_stream","FileUtils","FileUtils.html#method-c-copy_stream","(src, dest)","<p>Copies stream <code>src</code> to <code>dest</code>. <code>src</code> must\nrespond to #read(n) and <code>dest</code> must respond to #write(str).\n"],["cp","FileUtils","FileUtils.html#method-c-cp","(src, dest, options = {})","<p>Options: preserve noop verbose\n<p>Copies a file content <code>src</code> to <code>dest</code>.  If\n<code>dest</code> is a directory, copies <code>src</code> …\n"],["cp_r","FileUtils","FileUtils.html#method-c-cp_r","(src, dest, options = {})","<p>Options: preserve noop verbose dereference_root remove_destination\n<p>Copies <code>src</code> to <code>dest</code>. If <code>src</code> is a\ndirectory, …\n"],["getwd","FileUtils","FileUtils.html#method-c-getwd","()",""],["identical?","FileUtils","FileUtils.html#method-c-identical-3F","(a, b)",""],["install","FileUtils","FileUtils.html#method-c-install","(src, dest, options = {})","<p>Options: mode preserve noop verbose\n<p>If <code>src</code> is not same as <code>dest</code>, copies it and changes\nthe permission mode …\n"],["link","FileUtils","FileUtils.html#method-c-link","(src, dest, options = {})",""],["ln","FileUtils","FileUtils.html#method-c-ln","(src, dest, options = {})","<p>Options: force noop verbose\n<p><strong><code>ln(old, new, options = {})</code></strong>\n<p>Creates a hard link <code>new</code> which points to <code>old</code>. If …\n"],["ln_s","FileUtils","FileUtils.html#method-c-ln_s","(src, dest, options = {})","<p>Options: force noop verbose\n<p><strong><code>ln_s(old, new, options = {})</code></strong>\n<p>Creates a symbolic link <code>new</code> which points to <code>old</code> …\n"],["ln_sf","FileUtils","FileUtils.html#method-c-ln_sf","(src, dest, options = {})","<p>Options: noop verbose\n<p>Same as\n\n<pre class=\"ruby\"><span class=\"ruby-comment\">#ln_s(src, dest, :force =&gt; true)</span>\n</pre>\n"],["makedirs","FileUtils","FileUtils.html#method-c-makedirs","(list, options = {})",""],["mkdir","FileUtils","FileUtils.html#method-c-mkdir","(list, options = {})","<p>Options: mode noop verbose\n<p>Creates one or more directories.\n\n<pre>FileUtils.mkdir 'test'\nFileUtils.mkdir %w( ...</pre>\n"],["mkdir_p","FileUtils","FileUtils.html#method-c-mkdir_p","(list, options = {})","<p>Options: mode noop verbose\n<p>Creates a directory and all its parent directories. For example,\n\n<pre>FileUtils.mkdir_p ...</pre>\n"],["mkpath","FileUtils","FileUtils.html#method-c-mkpath","(list, options = {})",""],["move","FileUtils","FileUtils.html#method-c-move","(src, dest, options = {})",""],["mv","FileUtils","FileUtils.html#method-c-mv","(src, dest, options = {})","<p>Options: force noop verbose\n<p>Moves file(s) <code>src</code> to <code>dest</code>.  If <code>file</code>\nand <code>dest</code> exist on the different disk partition, …\n"],["pwd","FileUtils","FileUtils.html#method-c-pwd","()","<p>Options: (none)\n<p>Returns the name of the current directory.\n"],["remove","FileUtils","FileUtils.html#method-c-remove","(list, options = {})",""],["remove_dir","FileUtils","FileUtils.html#method-c-remove_dir","(path, force = false)","<p>Removes a directory <code>dir</code> and its contents recursively. This\nmethod ignores StandardError if <code>force</code> is true. …\n"],["remove_entry","FileUtils","FileUtils.html#method-c-remove_entry","(path, force = false)","<p>This method removes a file system entry <code>path</code>.\n<code>path</code> might be a regular file, a directory, or something. …\n"],["remove_entry_secure","FileUtils","FileUtils.html#method-c-remove_entry_secure","(path, force = false)","<p>This method removes a file system entry <code>path</code>. \n<code>path</code> shall be a regular file, a directory, or something. …\n"],["remove_file","FileUtils","FileUtils.html#method-c-remove_file","(path, force = false)","<p>Removes a file <code>path</code>. This method ignores StandardError if\n<code>force</code> is true.\n"],["remove_tailing_slash","FileUtils","FileUtils.html#method-i-remove_tailing_slash","(dir)",""],["rm","FileUtils","FileUtils.html#method-c-rm","(list, options = {})","<p>Options: force noop verbose\n<p>Remove file(s) specified in <code>list</code>.  This method cannot remove\ndirectories. …\n"],["rm_f","FileUtils","FileUtils.html#method-c-rm_f","(list, options = {})","<p>Options: noop verbose\n<p>Equivalent to\n\n<pre class=\"ruby\"><span class=\"ruby-comment\">#rm(list, :force =&gt; true)</span>\n</pre>\n"],["rm_r","FileUtils","FileUtils.html#method-c-rm_r","(list, options = {})","<p>Options: force noop verbose secure\n<p>remove files <code>list[0]</code> <code>list[1]</code>… If\n<code>list[n]</code> is a directory, removes …\n"],["rm_rf","FileUtils","FileUtils.html#method-c-rm_rf","(list, options = {})","<p>Options: noop verbose secure\n<p>Equivalent to\n\n<pre class=\"ruby\"><span class=\"ruby-comment\">#rm_r(list, :force =&gt; true)</span>\n</pre>\n"],["rmdir","FileUtils","FileUtils.html#method-c-rmdir","(list, options = {})","<p>Options: parents, noop, verbose\n<p>Removes one or more directories.\n\n<pre>FileUtils.rmdir 'somedir'\nFileUtils.rmdir ...</pre>\n"],["rmtree","FileUtils","FileUtils.html#method-c-rmtree","(list, options = {})",""],["safe_unlink","FileUtils","FileUtils.html#method-c-safe_unlink","(list, options = {})",""],["symlink","FileUtils","FileUtils.html#method-c-symlink","(src, dest, options = {})",""],["touch","FileUtils","FileUtils.html#method-c-touch","(list, options = {})","<p>Options: noop verbose mtime nocreate\n<p>Updates modification time (mtime) and access time (atime) of file(s) …\n"],["uptodate?","FileUtils","FileUtils.html#method-c-uptodate-3F","(new, old_list)","<p>Options: (none)\n<p>Returns true if <code>new</code> is newer than all <code>old_list</code>.\nNon-existent files are older than any …\n"]]}}