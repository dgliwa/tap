class BeersController < ApplicationController
  respond_to :html, :json
  before_action :set_beer, only: [:show, :edit, :update, :destroy]
  skip_before_filter :verify_authenticity_token, only: [:update, :create, :destroy]

  # GET /beers
  # GET /beers.json
  def index
    if params[:latitude] && params[:longitude]
      latitude = params[:latitude].to_f
      longitude = params[:longitude].to_f
      @beers = Beer.where(latitude: latitude - 10..latitude + 10, longitude: longitude - 10..longitude + 10)
    else
      @beers = Beer.all
    end
  end

  def me
    @beers = Beer.where(user: current_user)
    render 'index'
  end

  # GET /beers/1
  # GET /beers/1.json
  def show
  end

  # GET /beers/new
  def new
    @beer = Beer.new
    respond_modal_with @beer
  end

  # GET /beers/1/edit
  def edit
  end

  # POST /beers
  # POST /beers.json
  def create
    beer = Beer.new(beer_params)
    beer.user = current_user
    beer.save
    render json: { success: 'success' }
  end

  # PATCH/PUT /beers/1
  # PATCH/PUT /beers/1.json
  def update
    respond_to do |format|
      if @beer.update(beer_params)
        format.html { redirect_to @beer, notice: 'Beer was successfully updated.' }
        format.json { render :show, status: :ok, location: @beer }
      else
        format.html { render :edit }
        format.json { render json: @beer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /beers/1
  # DELETE /beers/1.json
  def destroy
    @beer.destroy
    respond_to do |format|
      format.html { redirect_to beers_url, notice: 'Beer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_beer
      @beer = Beer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def beer_params
      params[:beer] = JSON.parse(params[:beer])
      params[:beer][:image] = params[:file]
      params.require(:beer).permit(:name, :description, :image, :latitude, :longitude)
    end
end
