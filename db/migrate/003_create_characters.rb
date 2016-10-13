require 'active_record'
#
class CreateCharacters < ActiveRecord::Migration[5.0]
  def up
    create_join_table :armors, :weapons, table_name: :characters do |t|
      t.primary_key :id
      t.references :armor, index: true, foreign_key: true
      t.references :weapon, index: true, foreign_key: true
      t.string :name
    end
  end

  def down
    drop_table :characters
  end
end

def main
  action = (ARGV[0] || :up).to_sym
  CreateCharacters.migrate(action)
end

main if __FILE__ == $PROGRAM_NAME
