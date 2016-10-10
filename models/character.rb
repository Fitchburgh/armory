require 'active_record'
#
class Character < ActiveRecord::Base
  belongs_to :weapon
  belongs_to :armor
end
