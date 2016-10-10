require 'active_record'
#
class Weapon < ActiveRecord::Base
  validates :weapon_type, :weapon_name, presence: true
  has_many :characters
  has_many :armors, through: :characters
end
