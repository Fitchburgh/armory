require 'active_record'
#
class Armor < ActiveRecord::Base
  validates :armor_slot, :armor_name, presence: true
  has_many :characters
  has_many :weapons, through: :characters
end
