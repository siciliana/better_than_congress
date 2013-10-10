class CreateVotes < ActiveRecord::Migration


  def change
    create_table :votes do |t|
      t.string :photo_choice
      t.integer :congress_photo_id
      t.integer :personage_photo_id

      t.timestamps
    end 

  end
end
