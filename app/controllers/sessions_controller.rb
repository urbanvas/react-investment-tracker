class SessionsController < ApplicationController

    def create
        @user = User.find_by(email: params[:user][:email])

        if @user && @user.authenticate(params[:user][:password])
            # find out why when you put a binding pry it hits this method twice in one response
            session[:user_id] = @user.id
            render json: { user: @user.user_serializer }
        else 
            render json: {
                error: 'Invalid Credentials'
            }, status: :unauthorized
        end
    end

    def get_current_user
        if logged_in?
            render json: { user: current_user.user_serializer }, status: :ok
        else
            render json: {
                error: 'No current User'
            }
        end
    end

    def destroy
        session.clear
        render json: {
            message: "Session Cleared, logged out from sessions controller"
        }
    end
end