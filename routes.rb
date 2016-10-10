require_relative 'models/armor'
require_relative 'models/character'
require_relative 'models/weapon'
require 'yaml'
require 'json'
require 'sinatra'
require 'pry'
require 'sinatra/cross_origin'

# database_config = YAML::load(File.open('config/database.yml'))

before do
  ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'])
  content_type :json
end

# after do
#   ActiveRecord::Base.connection.close
# end

get '/foo' do
  headers 'Access-Control-Allow-Origin' => '' # HEROKU URL FOR PROJECT
  'hello world'
end

options '/*' do
  response['Access-Control-Allow-Headers'] =
    'origin, x-requested-with, content-type'
end

register Sinatra::CrossOrigin

configure do
  enable :cross_origin
end

get '/' do
  p 'Hello, World!'
end

# Character API calls
get '/api/character_list' do
  Character.all.to_json
end

# want to call the whole armor list for a specific character
# get '/api/armor_list' do
#   Armor.where()
# end

post '/api/add_armor_piece' do
  new_piece = Armor.create(
    id: Armor.maximum(:id).next,
    armor_slot: params[:armor_slot],
    armor_name: params[:armor_name],
    description: params[:description]
  )
  if new_piece.valid?
    if new_piece.save
      status 201
      return new_piece.to_json
    end
    status 400
  end
  halt(400)
end
