Rails.application.routes.draw do

  get '/currentuser', to: 'sessions#get_current_user'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :show] 
      resources :investments
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
