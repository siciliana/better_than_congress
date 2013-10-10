get '/' do
  @personages_photo = Photo.where("id >= 13").sample 
  @congress_photo = Photo.where("id < 13").sample 
  erb :index
end


