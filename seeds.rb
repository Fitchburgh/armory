require_relative 'models/armor'
require_relative 'models/weapon'
require_relative 'models/character'
require 'pry'
require 'active_record'

# .gsub(/,/, '')
ActiveRecord::Base.establish_connection(ENV['DATABASE_URL']) #(ENV['DATABASE_URL'])

Armor.create!(
  armor_slot: 'helm',
  armor_name: 'wooden',
  description: 'Probably not going to protect you from more than a fist or rock'
)

Armor.create!(
  armor_slot: 'helm',
  armor_name: 'light',
  description: 'A steel helmet blessed by the Cleric of Torno.'
)

Armor.create!(
  armor_slot: 'helm',
  armor_name: 'dark',
  description: 'A dark glow eminantes from this rune adorned helmet.'
)

Armor.create!(
  armor_slot: 'helm',
  armor_name: 'steel',
  description: 'A sturdy helmet made of steel.  Would not go to battle' \
  ' without at least this.'
)

Weapon.create!(
  weapon_type: 'axe',
  weapon_name: 'dwarven',
  description: 'A basic axe forged by the dwarves of old.'
)

Weapon.create!(
  weapon_type: 'sword',
  weapon_name: 'steel',
  description: "A basic sword. Probably someone's father's"
)

Character.create!(
  armor_id: 1,
  weapon_id: 2,
  name: "Bhakti"
)

Character.create!(
  armor_id: 3,
  weapon_id: 1,
  name: "Tacopies"
)

# ActiveRecord::Base.connection.close
