class Api::V1::InvestmentsController < ApplicationController
    before_action :redirect?, :set_user

    def index
        render json: @user.investments
    end

    private
    def set_user
      @user = current_user
    end
end
