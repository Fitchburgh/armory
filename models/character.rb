require 'active_record'
#
class Character < ActiveRecord::Base
  validates :name, presence: true
  belongs_to :weapon
  belongs_to :armor
end
