class UsersController < ApplicationController
  before_action :find_user

  def show
    render json: @user, status: :ok
  end

  def update
    permitted_params =  user_params.except(:id)
    all_types = User::USER_TYPES.invert
    permitted_params['user_type'] = all_types[permitted_params['user_type']]
    @user.update!(permitted_params)
    render json: @user.reload, status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :user_type, :id, :about_me, :education, :address, social: {}, experience: {}, tags: [])
  end

  def find_user
    @user = User.find_by(id: params[:id])
    render json:{ "message": "User not found."}, status: 404 unless @user
  end

end
