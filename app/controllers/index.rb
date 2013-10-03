get '/' do
  # Look in app/views/index.erb
  erb :index
end


post '/shuffle' do
  erb :index, layout: !request.xhr? 
  # If the user passes-in a "value", let's use it. Otherwise, we'll generate a random one.

  # See: roll_if_value_is_nil method in the Roll model.
  value = params[:value] ? params[:value].to_i : nil

  @roll = value ? Roll.create({ value: value }) : Roll.create

  if request.xhr?
    erb :_die_roll, layout: false
  else
  erb :_shuffle   # HINT: what does this do? what should we do instead?
end 
end