require 'active_record'
#
class Armor < ActiveRecord::Base
  validates :armor_slot, :armor_name, presence: true
  has_many :characters
  has_many :weapons, through: :characters

  before_save :adjust_fields

  def adjust_fields
    armor_name.capitalize!.strip!
    armor_slot.downcase!.strip!
  end
end
