class CreateEventParticipants < ActiveRecord::Migration[6.0]
  def change
    create_table :event_participants do |t|
      t.string :event_id
      t.string :user_id

      t.timestamps
    end
  end
end
