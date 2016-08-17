class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
  include Pundit
  before_action :authenticate_by_token

  attr_reader :current_user

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  private


    def authenticate_by_token
      authenticate_with_http_token do |token, options|
        @current_user = User.find_by(token: token)
      end
      @current_user ||= params[:token] && User.find_by(token: params[:token])

      unless @current_user
        self.headers['WWW-Authenticate'] = 'Token realm = "Application"'
        render json: { error: "Bad credentials" }, status: :unauthorized
      end
    end

    def user_not_authorized
      render json: { error: "You are not authorized to perform this action." }
    end
end
