class ScoresController < ApplicationController

  def show
    @score  = GameScore.first
  end

  def update
    @score = GameScore.first
    if @score.update(score_params)
      render json: { score: @score.score }
    else
      render json: {error: 'Update failed'}, status: unprocessable_entity
    end
  end

  private

  def score_params
    params.require(:score).permit(:score, :user)
  end
end
