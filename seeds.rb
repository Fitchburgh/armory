require_relative 'models/armor'
require_relative 'models/weapon'
require_relative 'models/character'
require 'pry'
require 'active_record'

# .gsub(/,/, '')
ActiveRecord::Base.establish_connection(ENV['DATABASE_URL']) #(ENV['DATABASE_URL'])

Armor.new(
  helm: 'Steel Helm',
  body: 'Steel Chest',
  gloves: 'Steel Gloves',
  legs: 'Steel Subligar',
  feet: 'Steel Boots'
)

Armorset.new(
  set_name: 'Steel Set',
  helm: 'Steel Helm',
  body: 'Steel Chest',
  gloves: 'Steel Gloves',
  legs: 'Steel Subligar',
  feet: 'Steel Boots'
)

ActiveRecord::Base.connection.close
