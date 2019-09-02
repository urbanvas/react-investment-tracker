class Api::V1::InvestmentsController < ApplicationController
    before_action :get_current_user

    def index
        if logged_in?
            @investments = Investment.all 
            render json: @investments, status: :ok
        else
            render json: {
                error: "not logged in",
                status: :unauthorized
            }
        end
    end
end
