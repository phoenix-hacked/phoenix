class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.string :email
      t.integer :type
      t.integer :status
      t.text :about_me
      t.text :address
      t.string :google_id
      t.string :hashed_google_token
      t.json :education
      t.json :experience
      t.json :tags
      t.json :social
      t.json :custom

      t.timestamps
    end
  end
end
