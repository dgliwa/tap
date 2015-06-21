class CommentsController < ApplicationController
  respond_to :html, :json
  skip_before_filter :verify_authenticity_token, only: [:create]

  def create
    beer = Beer.find comment_params[:beer_id]
    render json: { success: 'success' } and return if CommentService.new().send beer.user, comment_params[:text]
    render json: { error: 'error' }
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
  def comment_params
    params.permit(:beer_id, :text)
  end
end
