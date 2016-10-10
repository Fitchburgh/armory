require 'active_record'
#
class Armor < ActiveRecord::Base
  has_many :characters
  has_many :weapons, through: :characters
end
