Rails.application.routes.draw do
  resources :beers
  post '/comments/', to: 'comments#create'
  post '/sms_callback/', to: 'comments#callback'
  devise_for :users

  root 'application#index'
end
