Rails.application.routes.draw do
  resources :beers
  post '/comments/', to: 'comments#create'
  devise_for :users

  root 'application#index'
end
