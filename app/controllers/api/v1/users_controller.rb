class Api::V1::UsersController < ApplicationController
    before_action :get_current_user
    
    def show

    end

    def create

    end

    private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
