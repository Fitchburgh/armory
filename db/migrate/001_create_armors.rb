require 'active_record'
#
class CreateArmors < ActiveRecord::Migration[5.0]
  def up
    create_table :armors do |t|
      t.string :armor_slot
      t.string :armor_name
      t.string :description
    end
  end

  def down
    drop_table :armors
  end
end

def main
  action = (ARGV[0] || :up).to_sym
  CreateArmors.migrate(action)
end

main if __FILE__ == $PROGRAM_NAME
