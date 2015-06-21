Rails.application.routes.draw do
  get '/beers/me', to: 'beers#me'
  resources :beers
  post '/comments/', to: 'comments#create'
  post '/sms_callback/', to: 'comments#callback'
  devise_for :users, { :registrations => 'registrations' }

  root 'application#index'
end
