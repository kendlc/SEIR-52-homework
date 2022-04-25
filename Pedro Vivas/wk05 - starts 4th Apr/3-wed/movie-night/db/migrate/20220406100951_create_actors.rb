class CreateActors < ActiveRecord::Migration[5.2]
  def change
    create_table :actors do |t|
      t.text :name
      t.text :photo
      t.text :birthplace
      t.date :dob
      t.timestamps
    end
  end
end
