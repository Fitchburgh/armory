require 'active_record'
#
class Character < ActiveRecord::Base
  validates :name, presence: true
  has_many :weapons
  has_many :armors
end
