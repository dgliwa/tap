Rails.application.routes.draw do
  get '/beers/me', to: 'beers#me'
  post '/beers/:id/follow', to: 'beers#follow'
  post '/beers/:id/unfollow', to: 'beers#unfollow'
  post '/beers/:id/in_stock', to: 'beers#in_stock'
  resources :beers
  post '/comments/', to: 'comments#create'
  post '/sms_callback/', to: 'comments#callback'
  devise_for :users, { :registrations => 'registrations' }

  root 'application#index'
end
