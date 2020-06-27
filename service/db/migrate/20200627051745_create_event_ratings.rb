class CreateEventRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :event_ratings do |t|
      t.string :user_id
      t.string :event_id
      t.integer :rating
      t.text :feedback

      t.timestamps
    end
  end
end
