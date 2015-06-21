Rails.application.routes.draw do
  resources :beers
  devise_for :users

  root 'application#index'
end
