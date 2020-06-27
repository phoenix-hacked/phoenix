Rails.application.routes.draw do
  get 'api/service_status', to: 'service_status#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :sessions, only: [:create]
    resources :users, only: [:update]
  end
end
