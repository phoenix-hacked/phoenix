class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :address
      t.string :website
      t.text :about
      t.string :category

      t.timestamps
    end
  end
end
