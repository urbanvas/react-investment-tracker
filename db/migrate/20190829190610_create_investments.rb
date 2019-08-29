class CreateInvestments < ActiveRecord::Migration[5.2]
  def change
    create_table :investments do |t|
      t.string :name
      t.float :growth_rate
      t.float :expense_rate
      t.float :initial_deposit
      t.belongs_to :user

      t.timestamps
    end
  end
end
