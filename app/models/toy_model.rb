class ToyModel
  include Mongoid::Document
  include Mongoid::Timestamps
  store_in :collection => "toy_model"
  field :toy, :type => String
end


=begin
load('./app/models/toy_model.rb')
=end