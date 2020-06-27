Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :events, only: [:index], path: 'events' do
    collection do
      get :user_events
    end
  end
end
