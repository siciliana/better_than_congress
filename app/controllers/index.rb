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
  @random_personage_id = @random_personage.id 
  p @votes_personage = @random_personage.votes.count
  erb :_shuffle_personages, layout: false 
end 

get '/shuffle_congress' do
  @congress_photo = Photo.where("category" => "congress")
  @random_congress = @congress_photo.sample
  @random_congress_url = @random_congress.url
  @congress_photo_id = @random_congress.id 
  p @votes_congress = @random_congress.votes.count


  erb :_shuffle_congress, layout: false
end

post '/vote' do
  Vote.create(params["vote"]) 
  # params[vote][congress_photo_id] = 
end 

# get '/vote_display' do
#   @random_personage = 
#   erb :_vote_display
# end 

get '/flag' do
  erb :flag
end
