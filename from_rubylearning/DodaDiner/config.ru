require 'rack'

use Rack::Static,
:urls => ["/stylesheets", "/images"],
:root => "public"
run lambda { |env|
[
200,
{
'Content-Type' => 'text/html',
'Cache-Control' => 'public, max-age=86400'
},
File.open('Dosa_Diner/Dosa_Diner.html', File::RDONLY)
]}

