Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  namespace :api, defaults: {format: :json} do
    namespace :v0 do
      resources :example, only: :index
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end