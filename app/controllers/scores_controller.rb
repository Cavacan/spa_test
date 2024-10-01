class ScoresController < ApplicationController

  def index
    @game_scores  = GameScore.all
  end

  def update
    game_score = GameScore.find(params[:id])
    if game_score.update(score: params[:score])
      render json: { status: 'success', score: game_score.score }
    else
      render json: { status: "error", message: game_score.errors.full_messages }, status: :unprocessable_entity
    end
  end

end
