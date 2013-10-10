get '/' do
  @personages_photo = Photo.order("id >= 13")
  # @congress_photo = Photo.where("id < 13").sample 
  erb :index
end

post '/' do
  # increment photo according to photo clicked 
end
