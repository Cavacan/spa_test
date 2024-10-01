class GameScore < ApplicationRecord
  validates :user, presence: true, uniqueness: true
  validates :score, presence: true, numericality: { only_integer: true}
end
