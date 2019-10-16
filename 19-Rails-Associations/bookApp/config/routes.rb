Rails.application.routes.draw do
  get 'authors/:id', to: "authors#show"
  get 'authors', to: "authors#index"
  resources :books
  get '/puppies', to: "books#index", as: "puppy"
  # get '/books', to: "books#index"
  # get '/books/new', to: "books#new"
  # post '/books', to: "books#create"
  # get '/books/:id', to: "books#show"
  # get '/books/:id/edit', to: "books#edit", as: "book"
  # patch '/books/:id', to: "books#update"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
