class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  skip_before_action :authenticate_by_token, only: [:create, :login, :index, :show]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  def login
    user = User.find_by(email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      # Generate Token
      user.generate_token!

      render json: user
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def logout
    # Destroy Token
    @current_user.update(token: nil)

    render json: @current_user
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
    #  params.fetch(:user, {})
      params.require(:user).permit(:first_name, :last_name, :email, :password, :phone_number, :profile_picture_url)
    end
end
