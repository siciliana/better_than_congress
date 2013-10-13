class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string :photo_choice
      t.integer :photo_id
      t.integer :vote_tally

      t.timestamps
    end 
  end
end
