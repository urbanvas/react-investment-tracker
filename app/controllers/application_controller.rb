class ApplicationController < ActionController::API
    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end

    def error
        { status: :unauthorized }
    end
end
