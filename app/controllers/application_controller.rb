class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # include ApplicationHelper
  # before_action :require_login
end
