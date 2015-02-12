#!/usr/bin/perl
# Copyright 1999-2006 Fred Steinberg, Brown Bear Software

use strict;
BEGIN {$Defines::calendar_root = 'CalciumDir40';}

#use CGI::Carp qw/fatalsToBrowser/;
$ENV{PATH} = '/bin';            # for taint mode

use lib "$Defines::calendar_root";
use lib "$Defines::calendar_root/redist";
use lib "$Defines::calendar_root/upgrades";

use Calendar::CalciumStart;
CalciumStart::go;

