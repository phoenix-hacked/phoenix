class AddRoleInUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :role, :int, default: 1
  end
end
