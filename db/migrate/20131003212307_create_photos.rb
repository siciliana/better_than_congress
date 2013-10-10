class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :name
      t.string :url 
      t.string :category
      t.integer :vote
    end
  end
end
