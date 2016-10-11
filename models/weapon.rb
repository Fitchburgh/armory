require 'active_record'
#
class Weapon < ActiveRecord::Base
  validates :weapon_type, :weapon_name, presence: true
  has_many :characters
  has_many :armors, through: :characters

  before_save :adjust_fields

  def adjust_fields
    weapon_name.capitalize!.strip!
    weapon_type.downcase!.strip!
  end
end
