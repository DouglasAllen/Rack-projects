# program5.rb
# commented to show order of output
scope = "OUTER SCOPE"
c = lambda { |i| puts "#{i}, #{scope}"; scope = "MARK" }

class Test
  def say(block)
    
    block.call(self.class)         #_3.0 => Test,  OUTER SCOPE
    
    scope = "INNER SCOPE"
    puts "Inner: scope=#{scope}"   #_4.0 => INNER SCOPE
    
  end
end

c.call(self.class)                 #_1.0 => Object, OUTER SCOPE
puts "Outer: scope=#{scope}"       #_2.0 => Outer: scope =MARK

#       reset the scope variable
scope = "OUTER SCOPE"
#       call the block from Test.say(block)
Test.new.say(c)                    #  see: 3.0, 4.0                    
puts "Outer: scope=#{scope}"       #_5.0 => Outer: scope=MARK