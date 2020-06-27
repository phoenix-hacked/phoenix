Rails.application.routes.draw do
  get 'api/service_status', to: 'service_status#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :sessions, only: [:create]
    resources :users, only: [:update, :show]
  end

  # That way Rails will pass anything it doesn’t match over to frontend/index.html so that React Router can take over
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
