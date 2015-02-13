use Rack::Static,
  #:urls => ["/stylesheets", "/images"],
  urls: ["/stylesheets", "/images"],
  #:root => "public"
  root: "/"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/code'#,
      #'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
    #File.open('lobstertest.rb', File::RDONLY)
  ]
}