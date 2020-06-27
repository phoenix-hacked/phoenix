class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :type
      t.integer :status
      t.text :address
      t.string :meeting_link
      t.datetime :start_datetime
      t.datetime :end_datetime
      t.string :category
      t.json :tags
      t.string :user_id
      t.string :mentor_id

      t.timestamps
    end
  end
end
