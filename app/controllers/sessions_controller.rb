class SessionsController < ApplicationController
    def create
        @user = User.find_by(email: params[:user][:email])
        if @user && @user.authenticate(params[:user][:password])
            session[:user_id] = @user.id
            render json: @user
        else
            render json: error
        end
    end

    def currentuser
        if current_user
            render json: current_user
        else
            render json: error
        end
    end

    def destroy
        session.clear
        render json: { message: "Session Cleared" }
    end
end