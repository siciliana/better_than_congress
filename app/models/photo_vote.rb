class PhotoVote < ActiveRecord::Base
  has_many :photos
  has_many :votes
end
