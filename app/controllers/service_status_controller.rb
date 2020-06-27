class ServiceStatusController < ApplicationController
  def index
    render json: {message: "All good from Sahayak API service"}, status: 200
  end
end
