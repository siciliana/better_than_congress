get '/' do
  @personages_photo = Photo.where("id >= 13")
  @random_photo = @personages_photo.sample
  @random_photo_url = @random_photo.url
  @personages_photo_id = @random_photo.id
  erb :index
end

get '/shuffle' do
  @personages_photo = Photo.where("id >= 13")
  @random_photo = @personages_photo.sample
  @random_photo_url = @random_photo.url
  erb :_shuffle, layout: false 
end 

post '/' do
  # increment photo according to photo clicked 
end

post '/vote' do
  Vote.create(params["vote"]) 
  # params[vote][congress_photo_id] = 
end 


get '/flag' do
  erb :flag
end
