# ----------------------------------------------------------------
    package XML::TreePP;
    use strict;
    use Carp;
    use Symbol;
# ----------------------------------------------------------------
    use vars qw( $VERSION );
    $VERSION = "0.07";
# ----------------------------------------------------------------
    my $XML_ENCODING = "UTF-8";
    my $INTERNAL_ENCODING = "UTF-8";
# ----------------------------------------------------------------

=head1 NAME

XML::TreePP -- Pure Perl implementation for parsing/writing xml file

=head1 SYNOPSIS

parse xml file into hash tree

    use XML::TreePP;
    my $tpp = XML::TreePP->new();
    my $tree = $tpp->parsefile( "index.rdf" );
    print "Title: ", $tree->{"rdf:RDF"}->{item}->[0]->{title}, "\n";
    print "URL:   ", $tree->{"rdf:RDF"}->{item}->[0]->{link}, "\n";

write xml as string from hash tree

    use XML::TreePP;
    my $tpp = XML::TreePP->new();
    my $tree = { rss => { channel => { item => [ {
        title   => "The Perl Directory",
        link    => "http://www.perl.org/",
    }, {
        title   => "The Comprehensive Perl Archive Network",
        link    => "http://cpan.perl.org/",
    } ] } } };
    my $xml = $tpp->write( $tree );
    print $xml;

get remote xml file with HTTP-GET and parse it into hash tree

    use XML::TreePP;
    my $tpp = XML::TreePP->new();
    my $tree = $tpp->parsehttp( GET => "http://use.perl.org/index.rss" );
    print "Title: ", $tree->{"rdf:RDF"}->{channel}->{title}, "\n";
    print "URL:   ", $tree->{"rdf:RDF"}->{channel}->{link}, "\n";

get remote xml file with HTTP-POST and parse it into hash tree

    use XML::TreePP;
    my $tpp = XML::TreePP->new( force_array => [qw( item )] );
    my $cgiurl = "http://search.hatena.ne.jp/keyword";
    my $keyword = "ajax";
    my $cgiquery = "mode=rss2&word=".$keyword;
    my $tree = $tpp->parsehttp( POST => $cgiurl, $cgiquery );
    print "Link: ", $tree->{rss}->{channel}->{item}->[0]->{link}, "\n";
    print "Desc: ", $tree->{rss}->{channel}->{item}->[0]->{description}, "\n";

=head1 DESCRIPTION

XML::TreePP module parses XML file and expands it for a hash tree.
And also generate XML file from a hash tree.
This is a pure Perl implementation.
You can also download XML from remote web server
like XMLHttpRequest object at JavaScript language.

=head1 EXAMPLES

=head2 Parse XML file

Sample XML source:

    <?xml version="1.0" encoding="UTF-8"?>
    <family name="Kawasaki">
        <father>Yasuhisa</father>
        <mother>Chizuko</mother>
        <children>
            <girl>Shiori</girl>
            <boy>Yusuke</boy>
            <boy>Kairi</boy>
        </children>
    </family>

Sample program to read a xml file and dump it:

    use XML::TreePP;
    use Data::Dumper;
    my $tpp = XML::TreePP->new();
    my $tree = $tpp->parsefile( "family.xml" );
    my $text = Dumper( $tree );
    print $text;

Result dumped:

    $VAR1 = {
        'family' => {
            '-name' => 'Kawasaki',
            'father' => 'Yasuhisa',
            'mother' => 'Chizuko',
            'children' => {
                'girl' => 'Shiori'
                'boy' => [
                    'Yusuke',
                    'Kairi'
                ],
            }
        }
    };

Explain:

    print $tree->{family}->{father};        # the father's given name.

The prefix '-' is added on every attributes' name.

    print $tree->{family}->{"-name"};       # the family name of the family

The array is used because the family has two boys.

    print $tree->{family}->{children}->{boy}->[1];  # The second boy's name
    print $tree->{family}->{children}->{girl};      # The girl's name

=head2 Text node and attributes:

If a element has both of a text node and attributes
or both of a text node and other child nodes,
value of a text node is moved to "#text" like child nodes.

    use XML::TreePP;
    use Data::Dumper;
    my $tpp = XML::TreePP->new();
    my $source = '<span class="author">Kawasaki Yusuke</span>';
    my $tree = $tpp->parse( $source );
    my $text = Dumper( $tree );
    print $text;

The result dumped is following:

    $VAR1 = {
        'span' => {
            '-class' => 'author',
            '#text' => 'Kawasaki Yusuke'
        }
    };

The special node name of "#text" is used because this elements
has attribute(s) in addition to the text node.

=head1 METHODS

=head2 $tpp = XML::TreePP->new( %attributes )

This method constructs a new "XML::TreePP" object.
Optional attributes are following:

=head2 output_encoding => "UTF-8",

You can define a encoding of xml file generated by write/writefile
methods. On Perl 5.8.x and later, you can select it from every
encodings supported by Encode.pm. On Perl 5.6.x or before with
Jcode.pm, you can use "Shift_JIS", "EUC-JP", "ISO-2022-JP" and
"UTF-8". The default value is "UTF-8".

=head2 force_array => [ "rdf:li", "item", "-xmlns" ],

This option allows you to specify a list of element names which
should always be forced into an array representation
The default value is null, it means that context of the elements
will determine to make array or to keep it scalar.

=head2 first_out => [ "link", "title", "-type" ],

This option allows you to specify a list of element/attribute
names which should always appears at first on output XML code.
The default value is null, it means alphabetical order is used.

=head2 last_out => [ "items", "item", "entry" ],

This option allows you to specify a list of element/attribute
names which should always appears at last on output XML code.

=head2 $tree = $tpp->parse( $source );

This method reads XML source and returns a hash tree converted.
The first argument is a scalar or a reference to a scalar.

=head2 $tree = $tpp->parsefile( $file );

This method reads a XML file and returns a hash tree converted.
The first argument is a filename.

=head2 $tree = $tpp->parsehttp( $method, $url, $body );

This method receives a XML file from a remote server via HTTP and
returns a hash tree converted.
$method is a method of HTTP connection: GET/POST/PUT/DELETE
$url is URI of a XML file.
$body is request body when you use POST method.
LWP::UserAgent module or HTTP::Lite module is required to fetch a file.

=head2 $source = $tpp->write( $tree, $encode );

This method parses a hash tree and returns a XML source generated.
$tree is a referecen to a hash tree.

=head2 $tpp->writefile( $file, $tree, $encode );

This method parses a hash tree and writes a XML source into a file.
$file is a filename to create.
$tree is a referecen to a hash tree.

=head1 AUTHOR

Yusuke Kawasaki, E<lt>u-suke [at] kawa.netE<gt>
http://www.kawa.net/works/perl/treepp/treepp-e.html

=head1 COPYRIGHT AND LICENSE

Copyright (c) 2006 Yusuke Kawasaki.  All rights reserved.  This program
is free software; you can redistribute it and/or modify it under the same
terms as Perl itself.

=cut
# ----------------------------------------------------------------
sub new {
    my $package = shift;
    my $self = {@_};
    bless $self, $package;
    $self;
}
# ----------------------------------------------------------------
sub writefile {
    my $self = shift;
    my $file = shift;
    my $tree = shift;
    my $encode = shift;
    my $text = $self->write( $tree, $encode );
    &write_raw_xml( $file, $text );
}
# ----------------------------------------------------------------
sub write {
    my $self = shift;
    my $tree = shift;
    my $from = $self->{internal_encoding} || $INTERNAL_ENCODING;
    my $to = shift || $self->{output_encoding} || $XML_ENCODING;
    my $decl = '<?xml version="1.0" encoding="'.$to.'" ?>';
    if ( exists $self->{first_out} ) {
        my $keys = $self->{first_out};
        $keys = [ $keys ] unless ref $keys;
        $self->{__first_out} = { map {$_=>1} @$keys };
    }
    if ( exists $self->{last_out} ) {
        my $keys = $self->{last_out};
        $keys = [ $keys ] unless ref $keys;
        $self->{__last_out} = { map {$_=>1} @$keys };
    }
    my $text = $self->hash_to_xml( undef, $tree );
    if ( $from && $to ) {
        my $stat = &encode_from_to( \$text, $from, $to );
        Carp::croak "Unsupported encoding: $to" unless $stat;
    }
    join( "\n", $decl, $text );
}
# ----------------------------------------------------------------
sub parsehttp {
    my $self = shift;

    return $self->parsehttp_lwp(@_) if defined $LWP::UserAgent::VERSION;
    return $self->parsehttp_lite(@_) if defined $HTTP::Lite::VERSION;

    local $@;
    eval { require LWP::UserAgent; };
    return $self->parsehttp_lwp(@_) if defined $LWP::UserAgent::VERSION;

    eval { require HTTP::Lite; };
    return $self->parsehttp_lite(@_) if defined $HTTP::Lite::VERSION;

    Carp::croak "LWP::UserAgent or HTTP::Lite is required: $_[1]";
}
# ----------------------------------------------------------------
sub parsehttp_lwp {
    my $self = shift;
    my $method = shift;
    my $url = shift;
    my $body = shift;

    my $ua = LWP::UserAgent->new();
    $ua->timeout(10);
    $ua->env_proxy();
    my $req = HTTP::Request->new( $method, $url );
    $req->content( $body ) if defined $body;
    my $res = $ua->request( $req );
    return unless $res->is_success();
    my $text = $res->content();
    $self->parse( \$text );
}
# ----------------------------------------------------------------
sub parsehttp_lite {
    my $self = shift;
    my $method = shift;
    my $url = shift;
    my $body = shift;

    my $http = HTTP::Lite->new();
    $http->method( $method );
    $http->{content} = $body if defined $body;
    $http->request( $url ) or return;
    my $text = $http->body();
    $self->parse( \$text );
}
# ----------------------------------------------------------------
sub parsefile {
    my $self = shift;
    my $file = shift;
    my $text = &read_raw_xml( $file );
    $self->parse( \$text );
}
# ----------------------------------------------------------------
sub parse {
    my $self = shift;
    my $textref = ref $_[0] ? $_[0] : \$_[0];
    my $to = $self->{internal_encoding} || $INTERNAL_ENCODING;
    if ( $to ) {
        my $from = &xml_decl_encoding( $textref );
        if ( $from ) {
            my $stat = &encode_from_to( $textref, $from, $to );
            Carp::croak "Unsupported encoding: $from" unless $stat;
        }
    }
    if ( exists $self->{force_array} ) {
        my $force = $self->{force_array};
        $force = [ $force ] unless ref $force;
        $self->{__force_array} = { map {$_=>1} @$force };
    }
    my $flat = $self->xml_to_flat( $textref );
    my $tree = $self->flat_to_tree( $flat, "" );
    wantarray ? ( $tree, $$textref ) : $tree;
}
# ----------------------------------------------------------------
sub xml_to_flat {
    my $self = shift;
    my $textref = shift;        # reference
    my $flat = [];
    while ( $$textref =~ m{
        ([^<]*) <
        ((
            \? ([^<>]*) \?
        )|(
            \!\[CDATA\[(.*?)\]\]
        )|(
            \!DOCTYPE\s+([^\[\]<>]*(?:\[.*?\]\s*)?)
        )|(
            \!--(.*?)--
        )|(
            ([^\!\?\s<>](?:"[^"]*"|'[^']*'|[^"'<>])*)
        ))
        > ([^<]*)
    }sxg ) {
        my( $ahead, $match, $typePI, $contPI, $typeCDATA, $contCDATA,
            $typeDocT, $contDocT,
            $typeCmnt, $contCmnt, $typeElem, $contElem, $follow ) =
            ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 );
        if ( $ahead ne "" ) {
            ## warn "Invalid header ignored: [$ahead]\n";
            print "Invalid header ignored: [$ahead] before <$match>\n";
        }

        if ( $typeElem ) {                          ## Element
            my $node = {};
            if ( $contElem =~ s#^/## ) {
                $node->{endTag} ++
            } elsif ( $contElem =~ s#/$## ) {
                # one line
            } else {
                $node->{startTag} ++;
            }
            $node->{tagName} = $1 if ( $contElem =~ s#^(\S+)\s*## );
            unless ( $node->{endTag} ) {
                my $attr = {};
                while ( $contElem =~ m/([^\s\=\"\']+)=(?:(")(.*?)"|'(.*?)')/sg ) {
                    my $key = $1;
                    my $val = &xml_unescape( $2 ? $3 : $4 );
                    $attr->{"-".$key} = $val;
                }
                $node->{attributes} = $attr;
            }
            push( @$flat, $node );
        } elsif ( $typeCDATA ) {                    ## CDATASection
            push( @$flat, $contCDATA );
        } elsif ( $typeCmnt ) {                     ## Comment
            # ignore
        } elsif ( $typeDocT ) {                     ## DocumentType
            # ignore
        } elsif ( $typePI ) {                       ## ProcessingInstruction
            # ignore
        } else {
            warn "Invalid Tag: $match\n";
        }
        if ( $follow =~ /\S/ ) {
            $follow =~ s/^([ \t]*[\r\n])+//s;
            $follow =~ s/([\r\n][ \t]*)+$//s;
            my $val = &xml_unescape( $follow );
            push( @$flat, $val );
        }
    }
    $flat;
}
# ----------------------------------------------------------------
sub flat_to_tree {
    my $self = shift;
    my $source = shift;
    my $parent = shift;
    my $tree = {};
    my $text = [];

    while( scalar @$source ) {
        my $node = shift @$source;
        if ( ! ref $node ) {
            push( @$text, $node );
            next;
        }
        my $name = $node->{tagName};
        if ( $node->{endTag} ) {
            last if ( $parent eq $name );
            Carp::croak "Invalid tag sequence: <$parent></$name>";
        }
        my $elem = $node->{attributes};
        if ( $node->{startTag} ) {
            my $child = $self->flat_to_tree( $source, $name );
            if ( ref $elem && scalar keys %$elem ) {
                if ( ref $child ) {
                    # some attributes and some child nodes
                    foreach my $key ( keys %$child ) {
                        $elem->{$key} = $child->{$key};
                    }
                } elsif ( defined $child ) {
                    # some attributes and text node
                    $elem->{"#text"} = $child;
                }
            } else {
                # no attributes and text node or nothing
                $elem = $child;
            }
        }
        next unless defined $elem;
        $tree->{$name} ||= [];
        push( @{$tree->{$name}}, $elem );
    }
    foreach my $key ( keys %$tree ) {
        next if $self->{__force_array}->{$key};
        next if ( 1 < scalar @{$tree->{$key}} );
        $tree->{$key} = shift @{$tree->{$key}};
    }
    if ( scalar @$text ) {
        $text = shift @$text if ( scalar @$text == 1 );
        if ( scalar keys %$tree ) {
            # some child nodes and also text node
            $tree->{"#text"} = $text;
        } else {
            # only text node without child nodes
            $tree = $text;
        }
    }
    $tree;
}
# ----------------------------------------------------------------
sub hash_to_xml {
    my $self = shift;
    my $name = shift;
    my $hash = shift;
    my $out = [];
    my $attr = [];
    my $allkeys = [ sort keys %$hash ];
    my $firstkeys = [ grep {$self->{__first_out}->{$_}} @$allkeys ] if ref $self->{__first_out};
    my $lastkeys  = [ grep {$self->{__last_out}->{$_}}  @$allkeys ] if ref $self->{__last_out};
    $allkeys = [ grep {! $self->{__first_out}->{$_}} @$allkeys ] if ref $self->{__first_out};
    $allkeys = [ grep {! $self->{__last_out}->{$_}}  @$allkeys ] if ref $self->{__last_out};
    foreach my $loopkey ( $firstkeys, $allkeys, $lastkeys ) {
        next unless ref $loopkey;
        foreach my $key ( grep {!/^-/} @$loopkey ) {
            my $val = $hash->{$key};
            if ( ! defined $val ) {
                push( @$out, "<$key />" );
            } elsif ( UNIVERSAL::isa( $val, "ARRAY" ) ) {
                my $child = $self->array_to_xml( $key, $val );
                push( @$out, $child );
            } elsif ( ref $val ) {
                my $child = $self->hash_to_xml( $key, $val );
                push( @$out, $child );
            } else {
                my $child = $self->scalar_to_xml( $key, $val );
                push( @$out, $child );
            }
        }
        foreach my $key ( grep { /^-/} @$loopkey ) {
            my $name = ( $key =~ /^-(.*)$/s )[0];
            my $val = &xml_escape($hash->{$key});
            push( @$attr, " ".$name.'="'.$val.'"' );
        }
    }
    my $jattr = join( "", @$attr );
#   s/^(\s*<)/  $1/mg foreach @$out;
    my $text = join( "", @$out );
    if ( defined $name ) {
        if ( scalar @$out ) {
            if ( $text =~ /\n/s ) {
                $text = "<$name$jattr>\n$text</$name>\n";
            } else {
                $text = "<$name$jattr>$text</$name>\n";
            }
        } else {
            $text = "<$name$jattr />\n";
        }
    }
    $text;
}
# ----------------------------------------------------------------
sub array_to_xml {
    my $self = shift;
    my $name = shift;
    my $array = shift;
    my $out = [];
    foreach my $val ( @$array ) {
        if ( ! defined $val ) {
            push( @$out, "<$name />\n" );
        } elsif ( UNIVERSAL::isa( $val, "ARRAY" ) ) {
            my $child = $self->array_to_xml( $name, $val );
            push( @$out, $child );
        } elsif ( ref $val ) {
            my $child = $self->hash_to_xml( $name, $val );
            push( @$out, $child );
        } else {
            my $child = $self->scalar_to_xml( $name, $val );
            push( @$out, $child );
        }
    }
#   s/^(\s*<)/  $1/mg foreach @$out;
    my $text = join( "", @$out );
    $text;
}
# ----------------------------------------------------------------
sub scalar_to_xml {
    my $self = shift;
    my $name = shift;
    my $scalar = shift;
    my $copy = $scalar;
    my $text = &xml_escape($copy);
    $text = "<$name>$text</$name>\n" if ( $name ne "#text" );
    $text;
}
# ----------------------------------------------------------------
sub write_raw_xml {
    my $file = shift;
    my $fh = Symbol::gensym();
    open( $fh, ">$file" ) or Carp::croak "$! - $file";
    print $fh @_;
    close( $fh );
}
# ----------------------------------------------------------------
sub read_raw_xml {
    my $file = shift;
    my $fh = Symbol::gensym();
    open( $fh, $file ) or Carp::croak "$! - $file";
    local $/ = undef;
    my $text = <$fh>;
    close( $fh );
    $text;
}
# ----------------------------------------------------------------
sub xml_decl_encoding {
    my $textref = shift;
    my $line = ( $$textref =~ /^([^\r\n]*)/s )[0];
    my $args = ( $$textref =~ /^\s*<\?xml(\s+\S.*)\?>/s )[0] or return;
    my $getcode = ( $args =~ /\s+encoding="(.*?)"/ )[0] or return;
    $getcode;
}
# ----------------------------------------------------------------
sub encode_from_to {
    my( $str, $from, $to ) = @_;
    return if ( $from eq "" );
    return if ( $to eq "" );
    return $to if ( uc($from) eq uc($to) );
    local $@;
    eval { require Encode; } unless defined $Encode::VERSION;
    if ( defined $Encode::VERSION ) {
        Encode::from_to( $$str, $from, $to, Encode::FB_XMLCREF() );
    } elsif (( uc($from) eq "ISO-8859-1" || uc($from) eq "US-ASCII" ||
               uc($from) eq "LATIN-1" ) && uc($to) eq "UTF-8" ) {
        &latin1_to_utf8( $str );
    } else {
        my $jfrom = &get_jcode_name( $from );
        my $jto   = &get_jcode_name( $to );
        return $to if ( uc($jfrom) eq uc($jto) );
        if ( $jfrom && $jto ) {
            eval { require Jcode; } unless defined $Jcode::VERSION;
            if ( defined $Jcode::VERSION ) {
                Jcode::convert( $str, $jto, $jfrom );
            } else {
                Carp::croak "Encode.pm or Jcode.pm is required: $from to $to";
            }
        } else {
            Carp::croak "Encode.pm is required: $from to $to";
        }
    }
    $to;
}
# ----------------------------------------------------------------
sub latin1_to_utf8 {
    my $strref = shift;
    $$strref =~ s{
        ([\x80-\xFF])
    }{
        pack( "C2" => 0xC0|(ord($1)>>6),0x80|(ord($1)&0x3F) )
    }exg;
}
# ----------------------------------------------------------------
sub get_jcode_name {
    my $src = shift;
    my $dst;
    if ( $src =~ /^utf-?8$/i ) {
        $dst = "utf8";
    } elsif ( $src =~ /^euc.*jp$/i ) {
        $dst = "euc";
    } elsif ( $src =~ /^(shift.*jis|cp932|windows-31j)$/i ) {
        $dst = "sjis";
    } elsif ( $src =~ /^iso-2022-jp/ ) {
        $dst = "jis";
    }
    $dst;
}
# ----------------------------------------------------------------
sub xml_escape {
    my $str = shift;
    $str =~ s/&/&amp;/g;
    $str =~ s/</&lt;/g;
    $str =~ s/>/&gt;/g;
    $str =~ s/"/&quot;/g;
    $str;
}
# ----------------------------------------------------------------
sub xml_unescape {
    my $str = shift;
    $str =~ s/&quot;/"/g;
    $str =~ s/&lt;/</g;
    $str =~ s/&gt;/>/g;
    $str =~ s/&amp;/&/g;
    $str;
}
# ----------------------------------------------------------------
;1;
# ----------------------------------------------------------------