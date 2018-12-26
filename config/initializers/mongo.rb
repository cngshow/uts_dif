if WINDOWS
  module Mongo
    PF_INET = 2 #Socket::PF_INET = 2 #2 in MRI ruby, 4 in JRuby on windows, 2 on Linux. We need 2.
    class Address
      def socket(socket_timeout, ssl_options = {})
        unless ssl_options.empty?
          Socket::SSL.new(host, port, host_name, socket_timeout, Mongo::PF_INET, ssl_options)#force it to see properly defined constant
        else
          Socket::TCP.new(host, port, socket_timeout, Mongo::PF_INET)
        end
      end
    end
  end
else
  puts "Linux Yay!"
end

 # t = ToyModel.new
 # t.toy = "rails server coming up at #{Time.now}"
 # t.save!

