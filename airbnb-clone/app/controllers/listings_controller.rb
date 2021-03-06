class ListingsController < ApplicationController
  before_action :set_listing, only: [:show, :update, :destroy]
  skip_before_action :authenticate_by_token, only: [:index, :show]
  # GET /listings
  def index
    @listings = Listing.all

    render json: @listings
  end

  # GET /listings/1
  def show
    render json: @listing
  end

  # POST /listings
  def create
    @listing = Listing.new(listing_params)

    if @listing.save
      render json: @listing, status: :created, location: @listing
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /listings/1
  def update
    authorize @listing

    if @listing.update(listing_params)
      render json: @listing
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /listings/1
  def destroy
    authorize @listing

    @listing.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_listing
      @listing = Listing.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def listing_params
    #  params.fetch(:listing, {})
      params.require(:listing).permit(:image_url, :user_id, :title, :sharing_type, :guest_capacity, :bed_capacity, :daily_price)
    end
end
