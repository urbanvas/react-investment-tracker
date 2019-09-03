class Api::V1::UsersController < ApplicationController
    def create
        @user = User.new(username: params[:user][:username], email: params[:user][:email], password: params[:user][:password])
        if @user.save
            session[:user_id] = @user.id
            render json: @user
        else
            render json: error
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end