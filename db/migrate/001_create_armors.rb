require 'active_record'
#
class CreateArmors < ActiveRecord::Migration[5.0]
  def up
    create_table :armors do |t|
<<<<<<< HEAD
      t.string :item
=======
      t.string :armor_slot
      t.string :armor_name
      t.string :description
>>>>>>> c56fc0a9da27bf255fade0fc97e798c121d0e527
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
