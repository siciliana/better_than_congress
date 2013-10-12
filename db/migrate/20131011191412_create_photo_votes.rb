class CreatePhotoVotes < ActiveRecord::Migration
  def change
    create_table :photo_votes do |t|
      t.integer :photo_id
      t.ingeger :vote_id
      t.timestamps
    end
  end
end
