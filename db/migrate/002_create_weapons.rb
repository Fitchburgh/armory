require 'active_record'
#
class CreateWeapons < ActiveRecord::Migration[5.0]
  def up
    create_table :weapons do |t|
      t.string :type
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
