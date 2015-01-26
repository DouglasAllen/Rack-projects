=begin
	puts "debug line <number> #{var}"
=end

$x = 42

class Hiya
  
  message1 = "Hi all from rubylearning PFTWWR-41"
  message2 = "debug line 10 #{$x} is the meaning of life. lol"
  @@message = message1 << "\n" << message2
  
  def self.hiya    
    print @@message
  end

  def hiya
     @message = @@message
  end  
end

test = Hiya.new
test.hiya
