use Rack::Static,
  :urls => ["/css", "/images"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/Dosa_Diner.html', File::RDONLY)
  ]
}
