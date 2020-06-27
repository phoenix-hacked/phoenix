class SessionsController < ApplicationController

  def create
    parsed_params = parse_params
    user = User.where(email: parsed_params[:email])&.first
    if !user
      user = User.create!(parsed_params)
    end
    flow = user.user_type ? "login" : "signup"
    render json: { user: user, flow: flow }, status: :ok
  end

  private

  def find_user(email)
    User.find_by(email: email)
  end

  def parse_params
    user_details = params[:Qt]
    {
      'first_name': user_details['vW'], "last_name": user_details['wU'], 'email': user_details['zu'], 'google_id': user_details['SU']
    }
  end
end
