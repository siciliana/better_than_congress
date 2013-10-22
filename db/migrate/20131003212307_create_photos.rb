class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :name
      t.string :url
      t.string :category
      t.integer :vote_tally, default: 0
    end
  end
end
