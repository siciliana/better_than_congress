get '/' do
  @personages_photo = Photo.where("category" => "personage")
  @random_personage = @personages_photo.sample
  @random_personage_url = @random_personage.url
  @personages_photo_id = @random_personage.id

  @congress_photo = Photo.where("category" => "congress")
  @random_congress = @congress_photo.sample
  @random_congress_url = @random_congress.url
  @congress_photo_id = @random_congress.id 
  erb :index
end

get '/shuffle_personage' do
  @personages_photo = Photo.where("category" => "personage")
  @random_personage = @personages_photo.sample
  @random_personage_url = @random_personage.url


  erb :_shuffle_personages, layout: false 
end 

get '/shuffle_congress' do
  @congress_photo = Photo.where("category" => "congress")
  @random_congress = @congress_photo.sample
  @random_congress_url = @random_congress.url
  @congress_photo_id = @random_congress.id 

  erb :_shuffle_congress, layout: false
end

post '/' do
  # increment photo according to photo clicked 
end

post '/vote' do
  Vote.create(params["vote"]) 
  # params[vote][congress_photo_id] = 
end 

get '/vote_display' do
  erb :_vote_display
end 


get '/flag' do
  erb :flag
end
