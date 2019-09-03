Rails.application.routes.draw do
  get '/currentuser', to: 'sessions#currentuser'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create] 
      resources :investments
    end
  end
end
