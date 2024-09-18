class CreateGameScores < ActiveRecord::Migration[7.1]
  def change
    create_table :game_scores do |t|
      t.string :user
      t.integer :score

      t.timestamps
    end
  end
end
