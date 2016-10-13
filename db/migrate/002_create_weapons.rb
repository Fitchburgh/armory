require 'active_record'
#
class CreateWeapons < ActiveRecord::Migration[5.0]
  def up
    create_table :weapons do |t|
<<<<<<< HEAD
      t.string :item
=======
      t.string :weapon_type
      t.string :weapon_name
      t.string :description
>>>>>>> c56fc0a9da27bf255fade0fc97e798c121d0e527
    end
  end

  def down
    drop_table :weapons
  end
end

def main
  action = (ARGV[0] || :up).to_sym
  CreateWeapons.migrate(action)
end

main if __FILE__ == $PROGRAM_NAME
