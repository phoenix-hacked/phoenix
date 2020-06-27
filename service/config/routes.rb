Rails.application.routes.draw do
  get 'service_status/', to: 'service_status#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
