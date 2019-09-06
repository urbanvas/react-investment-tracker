class Api::V1::InvestmentsController < ApplicationController
    before_action :redirect?, :set_user

    def index
        render json: @user.investments
    end

    def create
		@investment = Investment.new(
			name: params[:investment][:name], 
			growth_rate: params[:investment][:growth_rate], 
			expense_rate: params[:investment][:expense_rate], 
			initial_deposit: params[:investment][:initial_deposit]
		)
      @investment.user_id = @user.id
      @investment.save
      render json: @investment
    end

    private
    def set_user
      @user = current_user
    end

    def investment_params
      params.require(:investment).permit( :name, :growth_rate, :expense_rate, :initial_deposit, :user_id)
    end
end
