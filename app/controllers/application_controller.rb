class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_filter :update_sanitized_params, if: :devise_controller?

	def update_sanitized_params
	  devise_parameter_sanitizer.for(:sign_up) {|u| u.permit(:phone_number, :email, :password, :password_confirmation)}
	end

	def respond_modal_with(*args, &blk)
      options = args.extract_options!
      options[:responder] = ModalResponder
      respond_with *args, options, &blk
  end

  def index
  end
end
