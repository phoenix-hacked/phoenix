Rails.application.routes.draw do
  get 'service_status/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :sessions, only: [:create]
  resources :users, only: [:update, :show]

  resources :events, only: [:index, :create], path: 'events' do
    collection do
      get :user_events
    end
  end
end