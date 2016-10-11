require 'active_record'
#
class Character < ActiveRecord::Base
  validates :name, presence: true
  has_many :weapons
  has_many :armors

  before_save :adjust_fields

  def adjust_fields
    name.capitalize!.strip!
  end
end
