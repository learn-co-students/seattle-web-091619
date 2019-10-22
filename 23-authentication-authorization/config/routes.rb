Rails.application.routes.draw do
  resources :teachers
  resources :students, only: [:show, :new, :index, :create]
  get '/signup', to: "teachers#new"
  post '/signup', to: "teachers#create"

  get '/login_page', to: "auth#signin"
  post '/login_page', to: "auth#verify"

  get '/logout', to: "auth#logout" 
  root 'students#index'
end
