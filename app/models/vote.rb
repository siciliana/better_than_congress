class Vote < ActiveRecord::Base
  belongs_to :photo

  def initialize
    @vote_tally = 1 
  end 

end
