Rails.application.routes.draw do
  get 'galaxies/new', to: "galaxies#new"
  post 'galaxies', to: "galaxies#create"
  get 'galaxies/:id', to: "galaxies#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
