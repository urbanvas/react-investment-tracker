class InvestmentSerializer < ActiveModel::Serializer
	attributes :id, :name, :growth_rate, :expense_rate, :initial_deposit
end
