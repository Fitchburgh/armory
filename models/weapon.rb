require 'active_record'
#
class Weapon < ActiveRecord::Base
  has_many :characters
  has_many :armors, through: :characters
end
