class Photo < ActiveRecord::Base
  has_many :votes 
end

class CongressPhoto < Photo
end 

class PersonagePhoto < Photo
end 
